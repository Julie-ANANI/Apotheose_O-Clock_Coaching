const db = require('../database');

class NoInteractError extends Error {
    message = 'No interact found in database';
};

class UnknowInteractError extends Error {
    message = 'No interact found with this id';
};

class InteractNotUpdatedError extends Error {
    message = 'Interact not updated';
};

class InteractNotAddedError extends Error {
    message = 'Interact not added';
};



/**
 * An entity representing a coaching mission
 * @typedef Interact
 * @property {boolean} isChecked
 * @property {string} createdAt
 * @property {string} modifiedAt
 * 
 */

 /**
 * A model representing a coaching theme
 * @class
 */
class Interact {

    static NoInteractError = NoInteractError;
    static InteractNotUpdatedError = InteractNotUpdatedError;
    static InteractNotAddedError = InteractNotAddedError ;

    /**
     * The Theme constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    /**
     * Fetches every interact in the database
     * @returns {Array<Interact>}
     * @async
     * @static
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

    async save() {
        if (this.id) {
        // UPDATE
            
        const { rows } = await db.query(`UPDATE interact SET is_checked=$1 WHERE mission_id=$2 AND user_id=$3;`,[
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
            const { rows } = await db.query(`INSERT INTO interact(is_checked,mission_id,user_id) VALUES
            ($1,$2,$3);`, [
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


