const db = require('../database');

class NoMissionError extends Error {
    message = 'No mission found in database';
};

class UnknowMissionError extends Error {
    message = 'No mission found with this id';
};

class MissionNotUpdatedError extends Error {
    message = 'Mission not updated';
};

class NoMissionAddedError extends Error {
    message = 'Mission not added';
};

class NoMissionFoundInTheme extends Error {
    message = 'No mission found for this theme id';
};


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
    };

    static NoMissionError = NoMissionError;
    static UnknowMissionError = UnknowMissionError;
    static MissionNotUpdatedError = MissionNotUpdatedError;
    static NoAddMissionError = NoMissionError;
    static NoMissionFoundInTheme = NoMissionFoundInTheme;

    /**
     * Fetches every mission in the database
     * @returns {Array<Mission>}
     * @async
     * @static
     */
    static async findAll() {
        const { rows } = await db.query('SELECT * FROM mission;');

        if (rows) {
            return rows.map(row => new Mission(row));
        }else{
            throw new NoMissionError();
        };
    };


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
            throw new UnknowMissionError();
        };
    };

    /* Fetches every mission with the given theme from the database
     * @param {Number} tid - the theme id
     * @returns {Array<Mission>}
     * @static
     * @async
     */
    static async findByTheme(tid) {
        const { rows } = await db.query(`
        SELECT *
        FROM mission
        JOIN theme ON mission.theme_id = theme.id
        WHERE mission.theme_id = $1;`, [tid]);
        
        if (rows) {
            return rows.map(row => new Mission(row));
        } else {
            throw new NoMissionFoundInTheme();
        };
        
    };
    

    /**
      * Insert or update a mission.
      * 
      * @async
      * 
      * @function save
      * @param {number} id - A mission ID.
      * 
      */
    async save(){

        if(this.id){
            //TODO: do a function update_mission(json)
            const { rows } = await db.query('UPDATE mission SET title= $1, advice= $2, position= $3, theme_id = $4 WHERE id=$5 ', [
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
            //TODO: do a function new_mission(json)
            const{ rows } = await db.query('INSERT INTO mission(title,advice,position,theme_id)VALUES ($1,$2,$3,$4)', [
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
    }

    async delete () {
        // TODO: delete mission method
    }
};

module.exports = Mission;
