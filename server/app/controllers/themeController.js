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
    * It's control the road GET /v1/api/themes/:id
    */
    getScoreOfOneThemeOfOneUser: async(req,res) =>{
        try{
            const { themeId, userId} = req.params;

            const score = await Theme.findTheScoreOfOneThemeOfOneUser(themeId, userId);
            res.status(200).json(score);
        }
        catch(err){

            res.status(400).json(err.message);
        };
    }

};

module.exports = themeController;