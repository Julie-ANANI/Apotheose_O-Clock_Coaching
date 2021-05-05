const db = require('../database');

class 

/**
 * An entity representing a user
 * @typedef User
 * @property {number} id
 * @property {number} apiUserId
 * @property {boolean} isAdmin
 * @property {number} createdAt
 * @property {number} modifiedAt
 * 
 */

 /**
 * A model representing a user
 * @class
 */
class User {
    /**
     * The User constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
    /**
     * Fetches every user in the database
     * @returns {Array<User>}
     * @async
     * @static
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM user;');

        return rows.map(row => new User(row));
    }
    /**
      * Fetches a single user.
      * 
      * @async
      * @static
      * @function findOne
      * @param {number} id - A user ID.
      * @returns {User|null} Instance of the class User or null if no such id in the database.
      */
    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM user WHERE id = $1;', [id]);

        if (rows[0]) {
            return new User(rows[0]);
        } else {
            return null;
        }
    }
}

module.exports = User;
