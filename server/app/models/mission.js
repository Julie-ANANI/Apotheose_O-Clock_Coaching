const db = require('../database');

/**
 * An entity representing a coaching mission
 * @typedef Mission
 * @property {number} id
 * @property {string} title
 * @property {string} advice
 * @property {string} position
 * @property {number} themeId
 * @property {number} createdAt
 * @property {number} modifiedAt
 * 
 */

 /**
 * A model representing a coaching mission
 * @class
 */
class Mission {
    /**
     * The Mission constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
    /**
     * Fetches every mission in the database
     * @returns {Array<Mission>}
     * @async
     * @static
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM mission;');

        return rows.map(row => new Mission(row));
    }
    /**
      * Fetches a single mission.
      * 
      * @async
      * @static
      * @function findOne
      * @param {number} id - A mission ID.
      * @returns {Mission|null} Instance of the class Mission or null if no such id in the database.
      */
    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM mission WHERE id = $1;', [id]);

        if (rows[0]) {
            return new Mission(rows[0]);
        } else {
            return null;
        }
    }
}

module.exports = Mission;