const db = require('../database');

class NoUserError extends Error {
    message = 'No user found in database';
};

class UnknowUserError extends Error {
    message = 'No user found with this id';
};

class UserNotUpdatedError extends Error {
    message = 'User not updated';
};

class UserNotAddedError extends Error {
    message = 'User not added';
};


/**
 * An entity representing a user
 * @typedef User
 * @property {number} id
 * @property {number} apiUser
 * @property {boolean} adminStatus
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
        const { rows } = await db.query('SELECT * FROM "user";');
        if (rows) {
            return rows.map(row => new User(row));
        } else {
            throw new NoUserError();
        };
        
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
        const { rows } = await db.query('SELECT * FROM "user" WHERE id = $1;', [id]);

        if (rows[0]) {
            return new User(rows[0]);
        } else {
            throw new UnknowUserError();
        }
    }

     /**
      * Insert or update a user.
      * 
      * @async
      * 
      * @function save
      * @param {number} id - A user ID.
      * 
      */
     async save(){
        if(this.id){
            //TODO: create a function update_user(json) + add trigger for updating timestamp
            const { rows } = await db.query('UPDATE "user" SET api_user= $1, admin_status = $2 WHERE id=$3 ;', [
                this.api_user, 
                this.admin_status
            ]);

            if(rows[0]){
                return rows[0];
            }else{
                throw new UserNotUpdatedError();
            };

        }else{
            //TODO: create a function insert_user(json)
            const{ rows } = await db.query('INSERT INTO "user"(api_user, admin_status) VALUES ($1,$2);', [
                this.api_user,
                this.admin_status
            ]);

            if(rows[0]){
                this.id = rows[0].id;
            }else{
                throw new UserNotAddedError();
            };
        };
    }

    // async delete () {
    //     // TODO: delete user method
    //     const { rows } = await db.query(`DELETE FROM "user" WHERE id=$1;`, [this.id]);
    // }
}

module.exports = User;
