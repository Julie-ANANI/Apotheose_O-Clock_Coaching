const db = require('../database');

// ALL error classes extends from the JS Error class with a custom message in each context
/**
 * Extends from Error class with custom message :'No theme found in the database'
 * @class
 */
class NoThemeError extends Error {
    message = 'No theme found in database';
};

/**
 * Extends from Error class with custom message: 'No theme found with this id'
 * @class
 */
class UnknownThemeError extends Error {
    message = 'No theme found with this id';
};

/**
 * Extends from Error class with custom message: 'Theme not added'
 * @class
 */
class ThemeNotAdded extends Error {
    message = 'Theme not added'
};

/**
 * Extends from Error class with custom message: 'Theme was not updated'
 * @class
 */
class ThemeNotUpdated extends Error { 
    message = 'Theme was not updated';
};

/**
 * Extends from Error class with custom message: 'Theme was not deleted'
 * @class
 */
class ThemeNotDeleted extends Error { 
    message = 'Theme was not deleted';
};

/**
 * Extends from Error class with custom message: 'Theme or user are not in the database'
 * @class
 */
class ThemeAndUserNotFound extends Error { 
    message = 'Theme or user are not in the database';
};


/**
 * An entity representing a theme in the coaching plan
 * @typedef Theme
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} position
 * @property {string} createdAt
 * @property {string} modifiedAt
 * 
 */

/**
 * A model representing a theme in the coaching plan
 * @class
 */
class Theme {
    /**
     * The Theme constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    // All static error properties of the Theme class
    static NoThemeError = NoThemeError;
    static UnknownThemeError = UnknownThemeError;
    static ThemeNotAdded = ThemeNotAdded;
    static ThemeNotUpdated = ThemeNotUpdated;
    static ThemeNotDeleted = ThemeNotDeleted;
    static ThemeAndUserNotFound = ThemeAndUserNotFound;


    /**
     * Returns all themes in the database
     * 
     * @static
     * @async
     * @function findOne
     * @returns {Array<Theme>} - An array of Theme instances
     * @throws {Error} - a potential SQL error.
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM theme;');

        if (rows) {
            return rows.map(row => new Theme(row));
        } else {
            throw new NoThemeError();
        };
    };

    /**
      * Returns a specific theme
      * 
      * @static
      * @async
      * @function findOne
      * @param {number} id - A theme ID.
      * @returns {<Theme>} - Instance of the Theme class
      * @throws {Error} - a potential SQL error.
      */
    static async findOne(id) {

        const { rows } = await db.query('SELECT * FROM theme WHERE id = $1;', [id]);

        if (rows[0]) {
            return new Theme(rows[0]);
        } else {
            throw new UnknownThemeError();
        };
        
    };


    /**
      * Returns the score for a given user and a given theme
      * @static
      * @async
      * @function findTheScoreOfOneThemeOfOneUser
      * @param {number} themeId - id of a theme
      * @param {number} userId - id of a user
      * @returns {number} - Number between zero and 100.
      * @throws {Error} - a potential SQL error.
      */
    static async findTheScoreOfOneThemeOfOneUser(themeId, userId){
        const {rows} = await db.query(`SELECT COUNT(mission.id) AS score
        FROM theme
        JOIN mission
        ON mission.theme_id = theme.id
        JOIN interact
        ON interact.mission_id = mission.id
        WHERE interact.user_id=$1 AND theme_id=$2
        GROUP BY theme.id;`,
        [userId,themeId]);

        if (rows[0]) {
            return rows[0];
        } else{
            return new ThemeAndUserNotFound();
        };
    };
/**
      * Creates a new theme or updates the database if the record already exists
      * 
      * @async
      * @function save
      * @returns {<Theme>} - Instance of the Theme class.
      * @throws {Error} - a potential SQL error.
      */
     async save() {
        
        const { rows } = await db.query('INSERT INTO "theme" (title, description, position) VALUES ($1, $2, $3) RETURNING id;', [
            this.title,
            this.description,
            this.position
        ]);
           if (rows[0]) {
              this.id = rows[0].id;
           } else {
               throw new ThemeNotAdded();
           };
   };
     /**
      * Updates a specific theme in the DB 
      * 
      * @async
      * @function save
      * @returns {<Theme>} - Instance of the Theme class.
      * @throws {Error} - a potential SQL error.
      */
    async update() {
  
        if (this.id) {
           const { rows }= await db.query(`
           UPDATE theme 
           SET title = $1, "description" = $2, position = $3, modified_at = now()
           WHERE id = $4 RETURNING id;
           `,
            [this.title, this.description,this.position,  this.id]);
            if (rows[0]) {
                return rows[0];
            } else {
                throw new ThemeNotUpdated();
            };
        };
    };
    
    /**
      * Deletes a theme
      * 
      * @async
      * @function delete
      * @returns {<Theme>} - Instance of the Theme class.
      * @throws {Error} - a potential SQL error.
      */
    async delete () {
        const { rows } = await db.query(`DELETE FROM theme WHERE id=$1 RETURNING id;`, [this.id]);
        
        if (rows[0]) {
            return rows[0];
        } else {
            throw new ThemeNotDeleted();
        };

    };
};

module.exports = Theme;