const db = require('../database');


// ALL classes extends Error with a personnal message in each context error
/**
 * Extends of Error's class with personnal message :'No user found in database'
 * @class
 */
class NoUserError extends Error {
    message = 'No user found in database';
};

/**
 * Extends of Error's class with personnal message :'No user found with this id'
 * @class
 */
class UnknowUserError extends Error {
    message = 'No user found with this id';
};

/**
 * Extends of Error's class with personnal message :'User not updated'
 * @class
 */
class UserNotUpdatedError extends Error {
    message = 'User not updated';
};

/**
 * Extends of Error's class with personnal message :'User not added'
 * @class
 */
class UserNotAddedError extends Error {
    message = 'User not added';
};

class UnknownAPIUserError extends Error {
    message = 'No user found with this ID';
}


/**
 * An entity representing a user's coaching
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


    // All static properties error of User's class
    static NoUserError = NoUserError;
    static UnknowUserError = UnknowUserError;
    static UserNotUpdatedError = UserNotUpdatedError;
    static UserNotAddedError = UserNotAddedError;


    /**
     * Fetches every user in the database
     * @async
     * @static
     * @function findAll
     * @returns {Array<User>} An array of all users in the database
     * @throws {Error} a potential SQL error.
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
      * Fetches a single user.
      * 
      * @async
      * @static
      * @function findOne
      * @param {number} id - A user ID.
      * @returns {User} Instance of the class User.
      * @throws {Error} a potential SQL error.
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
      * Fetches a single user based on the O’Clock API user’s ID.
      * 
      * @async
      * @static
      * @function findOneByApiId
      * @param {number} aid - The user ID in the O’Clock API.
      * @returns {User|null} Instance of the class User or null if no such id in the database.
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
     * Inserts a new user in the Database or updates the database if the record alredy exists.
     * 
     * @async
     * @function save
     * @returns {Array} Instances of the class User.
     * @throws {Error} a potential SQL error.
     */
    async save() {
        if (this.id) {
            //TODO: create a function update_user(json) + add trigger for updating timestamp

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
            //TODO: create a function insert_user(json)
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
