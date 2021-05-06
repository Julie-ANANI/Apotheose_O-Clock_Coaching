const db = require('../database');

// ALL classes extends Error with a personnal message in each context error
/**
 * Extends of Error's class with personnal message :'No theme found in the database'
 * @class
 */
class NoThemeError extends Error {
    message = 'No theme found in database';
};

/**
 * Extends of Error's class with personnal message :'No theme found with this id'
 * @class
 */
class UnknownThemeError extends Error {
    message = 'No theme found with this id';
};

/**
 * Extends of Error's class with personnal message :'Theme not added'
 * @class
 */
class ThemeNotAdded extends Error {
    message = 'Theme not added'
};

/**
 * Extends of Error's class with personnal message :'Theme was not updated'
 * @class
 */
class ThemeNotUpdated extends Error { 
    message = 'Theme was not updated';
};

/**
 * Extends of Error's class with personnal message :'Theme was not deleted'
 * @class
 */
class ThemeNotDeleted extends Error { 
    message = 'Theme was not deleted';
};


/**
 * An entity representing a theme's
 * @typedef Theme
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} position
 * @property {string} createdAt
 * @property {string} modifiedAt
 * 
 */

/**
 * A model representing a coaching theme
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

    // All static properties error of Theme's class
    static NoThemeError = NoThemeError;
    static UnknownThemeError = UnknownThemeError;
    static ThemeNotAdded = ThemeNotAdded;
    static ThemeNotUpdated = ThemeNotUpdated;
    static ThemeNotDeleted = ThemeNotDeleted;


    /**
     * Fetches every theme in the database
     * 
     * @static
     * @async
     * @function findOne
     * @returns {Array<Theme>} An array of all themes in the database
     * @throws {Error} a potential SQL error.
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
      * Fetches a single theme
      * 
      * @static
      * @async
      * @function findOne
      * @param {number} id - A theme ID.
      * @returns {Theme} Instance of the class Theme
      * @throws {Error} a potential SQL error.
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
      * Inserts a new theme in the DB or updates the database if the record alredy exists.
      * 
      * @async
      * @function save
      * @returns {Array} Instances of the class Theme.
      * @throws {Error} a potential SQL error.
      */
     async save() {
        if (this.id) {
            // PUT route
            // TODO: create SQL function update_theme AND trigger for updating timestamp
            const { rows }= await db.query(`
            UPDATE "theme" SET title = $1, description = $2, position = $3  WHERE id = $4 RETURNING id;`,
            [this.title, this.description, this.position, this.id]);

            if (rows[0]) {
                return rows[0];
            } else {
                throw new ThemeNotUpdated();
            };
        } else {
            // POST route
            // TODO: create SQL function to insert a new theme
            const { rows } = await db.query('INSERT INTO "theme" (title, description, position) VALUES ($1, $2, $3) RETURNING id;', [
                this.title,
                this.description,
                this.position
            ]);

            if(rows[0]){
                this.id = rows[0].id;
            }else{
                throw new ThemeNotAdded();
            };
        };
    }

    /**
      * Delete a theme
      * 
      * @async
      * @function delete
      * @returns {Array} Instances of the class Theme.
      * @throws {Error} a potential SQL error.
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