const Theme = require('../models/theme');

const themeController = {
    /**
    * It's control the road GET /v1/api/themes
    */
    getAllThemes: async (_, res) => {
   
        try{
            /* *
             * All the themes are retrieved from the database
             */
            const theThemes = await Theme.findAll();
            res.status(200).json(theThemes);

        } catch (err) {
            /**
            * There are no themes in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        };

    },


    /**
    * It's control the road GET /v1/api/themes/:id
    */
    getOneTheme: async (req, res) => {

        try {
            /**
             * We get the id in the parameters of the request
             */
            const { id } = req.params;

            const onlyOneTheme = await Theme.findOne(id);
            res.status(200).json(onlyOneTheme);

        } catch(err) {
            /**
            * There is no this theme in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        };
    },


    /**
    * It's control the road POST /v1/api/themes/:themeId
    */
    changeTheme: async (req, res) => {
        try {  
            
            // recuperation of id une request 
            const {themeId} = req.params; 
            // verify if theme exists in the database
            const theme = await Theme.findOne(themeId);
    
                if (!theme) {
                    res.status(404).json(err.message);

                } else {
                    // recuperation of infos body if id exists
                    const { title, description, position } = req.body;
                
                    //replace title if new modification
                    if (title) {
                        theme.title = title;
                    }
                    // replace description if new description 
                    if (description) {
                        theme.description = description;
                    }
                    // replace position if new position
                    if(position) {
                        theme.position = position;
                    
                    } 
                    // execute methode update in the model Theme
                    await theme.update();
                    res.status(200).json(theme);
                  
                }
            }

            catch(err) {
                res.status(404).json(err.message);
            }    
    },


    /**
    * It's control the road POST /v1/api/themes
    */
    addNewTheme: async (req, res) => {
        try {  
            // We get the body parameters of the request from req.body
            const { title, description, position} = req.body;

            // we check that all parameters have been passed on and add any errors to an array
            let bodyErrors = [];

            if (!title) {
               bodyErrors.push(`title is cannot be empty`);
            }
            if (!description) {
               bodyErrors.push(`description cannot be empty`);
            }

            if(!position) {
                bodyErrors.push(`the position already exists`)
            }

            // if there are any errors, we return them
            if (bodyErrors.length) {
                res.status(400).json(bodyErrors);
            } else {
                // if there are no errors, we can save this new record in the database
                const newTheme = new Theme({ title, description, position });
                await newTheme.save();
                res.status(200).json(newTheme);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    },



    /**
    * It's control the road GET /v1/api/themes/:id
    */
   deleteTheme: async (req, res) => {

    try {
        /**
         * We get the id in the parameters of the request
         */
        const { themeId } = req.params;
        // verify theme id is exists in the database
        const theme = await Theme.findOne(themeId);

        if(!theme){
            res.status(404).send(`id do not exists`);
        }else {
        // active methode async delete in the model theme
        const  deleteTheme = await theme.delete();
        res.status(200).json(deleteTheme);
    }
    } catch(err) {
        /**
        * There is no this theme in the database
        * In the model, there is an error with a custom message
        */
        res.status(404).json(err.message);
    }
},

    /**
    * It's control the road GET v1/api/students/:userId/themes/:themeId/score
    */
    getScoreOfOneThemeOfOneUser: async(req,res) =>{
        try{
            const { themeId, userId } = req.params;

            const score = await Theme.findTheScoreOfOneThemeOfOneUser(themeId, userId);
            res.status(200).json(score);
        }
        catch(err){

            res.status(400).json(err.message);
        };
    }

};

module.exports = themeController;