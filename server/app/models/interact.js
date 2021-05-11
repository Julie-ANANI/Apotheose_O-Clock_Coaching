const db = require('../database');


// ALL classes extends Error with a custom error message in each context

/**
 * Extends from Error class with custom message :'No interact found in database'
 * @class
 */
class NoInteractError extends Error {
    message = 'No interact found in database';
};

/**
 * Extends from Error class with custom message :'No interact found for this mission and this user in database'
 * @class
 */
class NoInteractforMissionAndUserError extends Error {
    message = 'No interact found for this mission and this user in database';
};


/**
 * Extends from Error class with custom message :'Interact not updated'
 * @class
 */
class InteractNotUpdatedError extends Error {
    message = 'Interact not updated';
};

/**
 * Extends from Error class with custom message :'Interact not added'
 * @class
 */
class InteractNotAddedError extends Error {
    message = 'Interact not added';
};

/**
 * Extends from Error class with custom message :'Interact not deleted'
 * @class
 */
class InteractNotDeletedError extends Error {
    message = 'Interact not deleted';
};



/**
 * An entity representing a coaching Interact
 * @typedef Interact
 * @property {boolean} isChecked
 * @property {string} createdAt
 * @property {string} modifiedAt
 * 
 */

/**
* A model representing an interact
* @class
*/
class Interact {


    // All static properties error of Interact's class
    static NoInteractError = NoInteractError;
    static InteractNotUpdatedError = InteractNotUpdatedError;
    static InteractNotAddedError = InteractNotAddedError;
    static InteractNotDeletedError = InteractNotDeletedError;
    static NoInteractforMissionAndUserError = NoInteractforMissionAndUserError;

    /**
     * The Interact constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    /**
     * Gets every interaction of a user in the database
     * @static
     * @async
     * @param {number} userId - The id of a unique user
     * @returns {Array<Interact>}
     */
    static async findAll(userId) {
        const { rows } = await db.query(`
        SELECT theme.title AS theme_title, mission.title AS mission_title
        FROM interact
        JOIN mission
		ON interact.mission_id = mission.id
		JOIN theme
		ON mission.theme_id = theme.id
        WHERE interact.user_id = $1;`, [userId]);

        if (rows) {
            return rows.map(row => new Interact(row));
        } else {
            throw new NoInteractError();
        };
    };

    /**
     * Gets the interaction for a specific user and a specific mission in the database
     * @static
     * @async
     * @param {number} userId - The id of a unique user
     * @param {number} missionId - The id of a unique mission
     * @returns {<Interact>}|null - One instance of the Interact class or null 
     */
    static async findOne(userId, missionId) {
        const {rows } = await db.query(`
        SELECT * 
        FROM interact
        WHERE interact.user_id = $1 AND interact.mission_id = $2;
        `, [userId, missionId]);

        if (rows[0]) {
            return new Interact(rows[0]);
        } else {
            throw new NoInteractforMissionAndUserError();
        };
    };

    /**
     * Gets the global score of a user
     * @static
     * @async
     * @function findGlobalScoreOfOneUser
     * @param {number} userId - The id of a unique user
     * @returns {Object} - An object of the global score
     */
    static async findGlobalScoreOfOneUser(userId){
        const { rows } = await db.query(`SELECT COUNT(mission_id) AS global_score
        FROM interact
        WHERE user_id= $1;`, 
        [userId]);

        if(rows[0]){
            return rows[0];
        }else{
            throw new NoInteractError();
        };

    };

    /**
      * Inserts a new interaction in the Database or updates the database if the record alredy exists.
      * 
      * @async
      * @function save
      * @returns {Array} Instances of the class Theme.
      * @throws {Error} a potential SQL error.
    */
    async save() {
        if (this.id) {
            // UPDATE 
            const { rows } = await db.query(`UPDATE interact
         SET is_checked=$1 
         WHERE mission_id=$2 
         AND user_id=$3
         RETURNING *;`, [
                this.is_checked,
                this.mission_id,
                this.user_id
            ]);

            if (rows[0]) {
                return rows[0];
            } else {
                throw new InteractNotUpdatedError();
            };

        } else {
            // INSERT

            const { rows } = await db.query(`INSERT INTO interact(is_checked, mission_id, user_id) 
            VALUES($1, $2, $3) RETURNING *;`, [
                this.is_checked,
                this.mission_id,
                this.user_id
            ]);
            
            if (rows[0]) {
                this.id = `(${this.mission_id}, ${this.user_id})`;
            } else {
                throw new InteractNotAddedError();
            };
        };
    };

    /**
      * Delete an interaction
      * 
      * @async
      * @function delete
      * @returns {Array} Instances of the class Interact.
      * @throws {Error} a potential SQL error.
      */
     async delete () {
        const { rows } = await db.query(`DELETE FROM interact WHERE user_id=$1 AND mission_id=$2 RETURNING *;`, [this.user_id, this.mission_id]);
        
        if (rows[0]) {
            return rows[0];
        } else {
            throw new InteractNotDeletedError();
        };

    };

};


module.exports = Interact;


