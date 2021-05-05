const db = require('../database');

class NoThemeError extends Error {
    message = 'No theme found in database';
};

class UnknownThemeError extends Error {
    message = 'No theme found with this id';
};

class ThemeNotAdded extends Error {
    message = 'Theme not added'
};

class ThemeNotUpdated extends Error { 
    message = 'Theme was not updated';
};


/**
 * An entity representing a coaching theme
 * @typedef Theme
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} position
 * @property {number} createdAt
 * @property {number} modifiedAt
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
    static NoThemeError = NoThemeError;
    static UnknowThemeError = UnknowThemeError;
    static ThemeNotAdded = ThemeNotAdded;
    static ThemeNotUpdated = ThemeNotUpdated;


    /**
     * Fetches every theme in the database
     * @returns {Array<Theme>}
     * @async
     * @static
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
      * Fetches a single category.
      * 
      * @async
      * @static
      * @function findOne
      * @param {number} id - A theme ID.
      * @returns {Theme|null} Instance of the class Theme or null if no such id in the database.
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
      * @returns [Array] Instances of the class Theme.
      * @throws {Error} a potential SQL error.
      */
     async save() {
        if (this.id) {
            // PUT route
            // TODO: create SQL function update_theme AND trigger for updating timestamp
            const { rows }= await db.query('UPDATE "theme" SET title = $1, description = $2, position = $3  WHERE id = $4;', [this.title, this.description, this.position, this.id]);
            if (rows[0]) {
                return new Theme(rows[0]);
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

                this.id = rows[0].id;
                throw new ThemeNotAdded();
            

        };
    }

    async delete () {
        // TODO: delete theme method
    }
};

module.exports = Theme;