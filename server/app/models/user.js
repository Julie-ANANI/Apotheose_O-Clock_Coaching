const db = require('../database');


// ALL error classes extends from the JS Error class with a custom message in each context
/**
 * Extends from Error class with custom message: 'No user found in database'
 * @class
 */
class NoUserError extends Error {
    message = 'No user found in database';
};

/**
 * Extends from Error class with custom message: 'No user found with this id'
 * @class
 */
class UnknowUserError extends Error {
    message = 'No user found with this id';
};

/**
 * Extends from Error class with custom message: 'User not updated'
 * @class
 */
class UserNotUpdatedError extends Error {
    message = 'User not updated';
};

/**
 * Extends from Error class with custom message: 'User not added'
 * @class
 */
class UserNotAddedError extends Error {
    message = 'User not added';
};

class UnknownAPIUserError extends Error {
    message = 'No user found with this ID';
}


/**
 * An entity representing a user
 * @typedef User
 * @property {number} id
 * @property {number} apiUser
 * @property {boolean} adminStatus
 * @property {string} createdAt
 * @property {string} modifiedAt
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
        };
    };


    // All static error properties of the User class
    static NoUserError = NoUserError;
    static UnknowUserError = UnknowUserError;
    static UserNotUpdatedError = UserNotUpdatedError;
    static UserNotAddedError = UserNotAddedError;


    /**
     * Returns all users in the database
     * @async
     * @static
     * @function findAll
     * @returns {Array<User>} - An array of User instances
     * @throws {Error} - a potential SQL error.
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM "user";');
        if (rows) {
            return rows.map(row => new User(row));
        } else {
            throw new NoUserError();
        };
    };

    /**
      * Returns a specific user.
      * 
      * @async
      * @static
      * @function findOne
      * @param {number} id - A user ID.
      * @returns {<User>} - Instance of the User class.
      * @throws {Error} - a potential SQL error.
      */
    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE id = $1;', [id]);

        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new UnknowUserError();
        };
    };

    /**
      * Returns a specific user based on the O’Clock API user’s ID.
      * 
      * @async
      * @static
      * @function findOneByApiId
      * @param {number} aid - The user ID in the O’Clock API.
      * @returns {<User>} - Instance of the User class
      */
    static async findOneByApiId(aid) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE api_user = $1;', [aid]);

        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new UnknownAPIUserError();
        }
    }

    /**
      * Checks if an O’Clock API user exists in our internal database. If not, it returns null.
      * 
      * @async
      * @static
      * @function checkByApiId
      * @param {number} aid - The user ID in the O’Clock API.
      * @returns {<User>|null} - Instance of the User class or null if no such id in the database.
      */
     static async checkByApiId(aid) {
        const { rows } = await db.query('SELECT * FROM "user" WHERE api_user = $1;', [aid]);

        if (rows[0]) {
            return new User(rows[0]);
        } else {
            return null;
        }
    }


    /**
     * Creates a new user or updates the database if the record already exists.
     * 
     * @async
     * @function save
     * @returns {<User>} - Instance of the User class.
     * @throws {Error} - a potential SQL error.
     */
    async save() {
        if (this.id) {
            const { rows } = await db.query('UPDATE "user" SET api_user= $1, admin_status = $2 WHERE id=$3 RETURNING id;', [
                this.api_user,
                this.admin_status,
                this.id
            ]);

            if (rows[0]) {
                return rows[0];
            } else {
                throw new UserNotUpdatedError();
            };

        } else {
            const { rows } = await db.query('INSERT INTO "user"(api_user, admin_status) VALUES ($1, $2) RETURNING id;', [
                this.api_user,
                this.admin_status
            ]);

            if (rows[0]) {
                this.id = rows[0].id;
                return rows[0];
            } else {
                throw new UserNotAddedError();
            };
        };
    };
}

module.exports = User;