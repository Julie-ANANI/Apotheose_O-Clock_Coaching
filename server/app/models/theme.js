const db = require('../database');

/**
 * An entity representing a coaching theme
 * @typedef Theme
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} position
 * @property {date} createdAt
 * @property {date} modifiedAt
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
        }
    }
    /**
     * Fetches every theme in the database
     * @returns {Array<Theme>}
     * @async
     * @static
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM theme;');

        return rows.map(row => new Theme(row));
    }
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
        // le connecteur retourne un objet dont seule la prop rows nous intéresse
        const { rows } = await db.query('SELECT * FROM theme WHERE id = $1;', [id]);

        if (rows[0]) { // si on donne un id qui n'existe pas, il n'y aura pas de rows[0] ;-)
            return new Theme(rows[0]); // tout simplement
        } else {
            return null;
        }
    }

}

module.exports = Theme;