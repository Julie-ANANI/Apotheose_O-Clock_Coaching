const db = require('../database');


// ALL error classes extends from JS Error class with a custom error message in each context

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
 * An entity representing a completed mission for a specific user
 * @typedef Interact
 * @property {string} createdAt
 * @property {string} modifiedAt
 * @property {number} missionId
 * @property {number} userID
 */

/**
* A model representing a completed mission for a specific user
* @class
*/
class Interact {


    // All static error properties of the Interact class
    static NoInteractError = NoInteractError;
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
     * Returns all checked boxes for a given user
     * @static
     * @async
     * @param {number} userId - The id of a unique user
     * @returns {Array<Interact>} - An array of Interact instances
     */
    static async findAll(userId) {
        const { rows } = await db.query(`
        SELECT * 
        FROM interact
        WHERE interact.user_id = $1
        ;`, [userId]);

        if (rows.length) {
            return rows.map(row => new Interact(row));
        } else {
            throw new NoInteractError();
        };
    };

    /**
     * Returns the interaction for a specific user and a specific mission in the database
     * @static
     * @async
     * @param {number} userId - The id of a unique user
     * @param {number} missionId - The id of a unique mission
     * @returns {<Interact>} - One instance of the Interact class
     */
    static async findOne(missionId, userId) {
        const { rows } = await db.query(`
        SELECT * 
        FROM interact
        WHERE interact.mission_id = $1 AND interact.user_id = $2;
        `, [missionId, userId]);

        if (rows[0]) {
            return new Interact(rows[0]);
        } else {
            throw new NoInteractforMissionAndUserError();
        };
    };

    /**
     * Returns the global score of a user
     * @static
     * @async
     * @function findGlobalScoreOfOneUser
     * @param {number} userId - The id of a unique user
     * @returns {number} - A number between zero and 100
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
      * Associates a user id and mission id to represent a checked box value
      * 
      * @async
      * @function save
      * @returns {<Interact>} - An instance of the Interact class.
      * @throws {Error} - a potential SQL error.
    */
    async save() {
        const { rows } = await db.query(`INSERT INTO interact(mission_id, user_id) 
            VALUES($1, $2) RETURNING (mission_id, user_id);`, [
            this.mission_id,
            this.user_id
        ]);

        if (rows[0]) {
            this.id = `(${this.mission_id}, ${this.user_id})`;
        } else {
            throw new InteractNotAddedError();
        };
    };


    /**
      * Deletes the association with user id and mission id to represent an unchecked box value 
      * 
      * @async
      * @function delete
      * @returns {<Interact>} - Instance of the Interact class.
      * @throws {Error} - a potential SQL error.
      */
    async delete() {
        const { rows } = await db.query(`DELETE FROM interact WHERE mission_id=$1 AND user_id=$2 RETURNING (mission_id, user_id);`, [this.mission_id, this.user_id]);

        if (rows[0]) {
            return rows[0];
        } else {
            throw new InteractNotDeletedError();
        };

    };

};


module.exports = Interact;