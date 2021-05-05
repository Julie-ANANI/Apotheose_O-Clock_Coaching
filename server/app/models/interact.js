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
    static async findAll() {
        const { rows } = await db.query(`
        SELECT * 
        FROM interact
        JOIN mission
        ON interact.mission_id = mission.id
        JOIN theme
        ON theme.id = mission.theme_id
        ;`);

        if (rows) {
            return rows.map(row => new Interact(row));
        } else {
            throw new NoThemeError();
        };
    };

};


module.exports = Interact;


