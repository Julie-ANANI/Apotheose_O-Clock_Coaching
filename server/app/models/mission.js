const db = require('../database');


// ALL error classes extends from the JS Error class with a custom message in each context
/**
 * Extends from Error class with custom message :'No mission found in database'
 * @class
 * @Error
 * @message
 */
class NoMissionError extends Error {
    message = 'No mission found in database';
};

/**
 * Extends from Error class with custom message :'No mission found with this id'
 * @class
 * @Error
 * @message
 */
class UnknowMissionError extends Error {
    message = 'No mission found with this id';
};

/**
 * Extends from Error class with custom message :'Mission not updated'
 * @class
 * @Error
 * @message
 */
class MissionNotUpdatedError extends Error {
    message = 'Mission not updated';
};

/**
 * Extends from Error class with custom message :'Mission not added'
 * @class
 * @Error
 * @message
 */
class NoMissionAddedError extends Error {
    message = 'Mission not added';
};

/**
 * Extends from Error class with custom message :'No mission deleted'
 * @class
 * @Error
 * @message
 */
class NoMissionDeletedError extends Error {
    message = 'No mission deleted';
};

/**
 * Extends from Error class with custom message:'No mission found for this theme id'
 * @class
 * @Error
 * @message
 */
class NoMissionFoundInThemeError extends Error {
    message = 'No mission found for this theme id';
};




/**
 * An entity representing a mission in the coaching plan
 * @typedef Mission
 * @property {number} id
 * @property {string} title
 * @property {string} advice
 * @property {number} position
 * @property {number} themeId
 * @property {string} createdAt
 * @property {string} modifiedAt
 * 
 */

 /**
 * A model representing a mission in the coaching plan
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
    };

    // All static error properties of the Mission class
    static NoMissionError = NoMissionError;
    static UnknowMissionError = UnknowMissionError;
    static MissionNotUpdatedError = MissionNotUpdatedError;
    static NoAddMissionError = NoMissionError;
    static NoMissionFoundInTheme = NoMissionFoundInThemeError;
    static NoMissionDeletedError = NoMissionDeletedError;

    /**
     * Returns all missions in the database
     * 
     * @static
     * @async
     * @function findAll
     * @returns {Array<Mission>} - An array of Mission instances
     * @throws {Error} - a potential SQL error.
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM mission;');
        if (rows.length) {
            return rows.map(row => new Mission(row));
        }else{
            throw new NoMissionError();
        };
    };


    /**
      * Returns a specific mission.
      * @async
      * @static
      * @function findOne
      * @param {number} id - A mission ID.
      * @returns {<Mission>} - Instance of the Mission class.
      * @throws {Error} - a potential SQL error.
      */
    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM mission WHERE id = $1;', [id]);

        if (rows[0]) {
            return new Mission(rows[0]);
        } else {
            throw new UnknowMissionError();
        };
    };

    /** Returns all missions with a given theme from the database
     * @param {Number} tid - the theme id
     * @static
     * @async
     * @returns {Array<Mission>} - An array of Mission instances
     * @throws {Error} - a potential SQL error.
     */
    static async findByTheme(tid) {
        const { rows } = await db.query(`
        SELECT *
        FROM mission
        WHERE theme_id = $1;`, [tid]);
        
        if (rows) {
            return rows.map(row => new Mission(row));
        } else {
            throw new NoMissionFoundInThemeError();
        };
        
    };
    

    /**
      * Creates a new mission or updates the database if the record already exists
      * 
      * @async
      * @function save
      * @returns {<Mission>} - Instance of the Mission class.
      * @throws {Error} - a potential SQL error.
      */
    async save(){

        if(this.id){
            const { rows } = await db.query('UPDATE mission SET title= $1, advice= $2, position= $3, theme_id = $4 WHERE id=$5 RETURNING id;', [
                this.title, 
                this.advice, 
                this.position, 
                this.theme_id, 
                this.id
            ]);

            if(rows[0]){
                return rows[0];
            }else{
                throw new MissionNotUpdatedError();
            };

        }else{
            const{ rows } = await db.query('INSERT INTO mission(title,advice,position,theme_id)VALUES ($1, $2, $3, $4) RETURNING id;', [
                this.title,
                this.advice,
                this.position,
                this.theme_id
            ]);

            if(rows[0]){
                this.id = rows[0].id;
            }else{
                throw new NoMissionAddedError();
            };
        };
    };

    /**
      * Deletes a specific mission
      * 
      * @async
      * @static
      * @function delete
      * @returns {<Mission>} - Instance of the Mission class.
      * @throws {Error} - a potential SQL error.
      */
    async delete() {
    
        const { rows } = await db.query(`DELETE FROM mission WHERE id=$1 RETURNING id;`, [this.id]);

        if (rows[0]) {
            return rows[0];
        } else {
            throw new NoMissionDeletedError();
        };

    };
};

module.exports = Mission;