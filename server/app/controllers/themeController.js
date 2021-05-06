const Theme = require('../models/theme');

const themeController = {
    getAllThemes: async (_, res) => {
        /**
         * It's control the road GET /v1/api/themes
         */
        // const theThemes = await Theme.findAll();

        // if (theThemes) {
        //     res.status(200).json(theThemes);
        // } else {
        //     res.status(404).json(err.message);
        // }

        try{
            const theThemes = await Theme.findAll();
            res.status(200).json(theThemes);
        } catch (err) {
            const { message, path } = err.details[0];
            res.status(404).json({message, path});
        }

    },
    /**
    * It's control the road GET /v1/api/themes/:id
    */
    getOneTheme: async (req, res) => {
        // const { id } = req.params;

        // const onlyOneTheme = await Theme.findOne(id);

        // if (onlyOneTheme) {
        //     res.status(200).json(onlyOneTheme);
        // } else {
        //     res.status(404).json(err.message);
        // }


        try{
        const { id } = req.params;
        const onlyOneTheme = await Theme.findOne(id);
        res.status(200).json(onlyOneTheme);
        }catch(err){
            const { message, path } = err.details[0];
            res.status(404).json({message, path});
        }
    },

    /* addNewTheme: async (req, res) => {

        const thenewTheme = new Theme(req.body);

        try {
            await thenewTheme.save();

            res.status(201).json(theTheme);
        } catch (err) {
            res.status(500).json(err.message);
        }
    } */
};

module.exports = themeController;