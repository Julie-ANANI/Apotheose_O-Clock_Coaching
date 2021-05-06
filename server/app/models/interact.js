const db = require('../database');


// ALL classes extends Error with a personnal message in each context error

/**
 * Extends of Error's class with personnal message :'No interact found in database'
 * @class
 */
class NoInteractError extends Error {
    message = 'No interact found in database';
};

/**
 * Extends of Error's class with personnal message :'Interact not updated'
 * @class
 */
class InteractNotUpdatedError extends Error {
    message = 'Interact not updated';
};

/**
 * Extends of Error's class with personnal message :'Interact not added'
 * @class
 */
class InteractNotAddedError extends Error {
    message = 'Interact not added';
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
    static InteractNotAddedError = InteractNotAddedError ;

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
     * Fetches every interact of a user in the database
     * @static
     * @async
     * @param {number} userId - The id of a unique user
     * @returns {Array<Interact>}
     */
    static async findAll(userId) {
        const { rows } = await db.query(`
        SELECT * 
        FROM interact
        WHERE interact.user_id = $1
        ;`,[userId]);

        if (rows) {
            return rows.map(row => new Interact(row));
        } else {
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
         AND user_id=$3;`,[
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
            const { rows } = await db.query(`INSERT INTO interact(is_checked,mission_id,user_id) 
            VALUES($1,$2,$3);`, [
                this.is_checked,
                this.mission_id,
                this.user_id
            ]);
            
            if (rows[0]) {
                this.id = `${this.mission_id}${this.user_id}`;
            } else {
                throw new InteractNotAddedError();
            };
        };
    };
};


module.exports = Interact;


