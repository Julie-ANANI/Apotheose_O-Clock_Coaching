const Theme = require('../models/theme');

const themeController = {
    /**
    * Controls endpoint GET /v1/api/themes
    */
    getAllThemes: async (_, res) => {

        try {
            // We get all the themes from the database
            const theThemes = await Theme.findAll();
            res.status(200).json(theThemes);

        } catch (err) {
            res.status(404).json(err.message);
        };

    },


    /**
    * Controls endpoint GET /v1/api/themes/:id
    */
    getOneTheme: async (req, res) => {

        try {
            // We get the id in the parameters of the request
            const { id } = req.params;

            const onlyOneTheme = await Theme.findOne(id);

            res.status(200).json(onlyOneTheme);


        } catch (err) {
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /v1/api/admin/themes/:themeId
    */
    changeTheme: async (req, res) => {
        try {
            // we get the theme id from the params 
            const { themeId } = req.params;
            // we check if theme exists in the database
            const theme = await Theme.findOne(themeId);

            // if theme exists, we get the body parameters
            const { title, description } = req.body;

            //If a parameter is provided, we update the theme accordingly
            if (title) {
                theme.title = title;
            }
            if (description) {
                theme.description = description;
            }

            // we save the changes in database
            await theme.update();
            res.status(200).json(theme);

        } catch (err) {
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /v1/api/admin/themes
    */
    addNewTheme: async (req, res) => {
        try {
            // We get the body parameters of the request
            const { title, description } = req.body;

            // we can save this new record in the database
            // For this v1, we don't handle the position, so we hard-code it for now
            const newTheme = new Theme({ title, description, 'position': 0 });
            await newTheme.save();
            res.status(201).json(newTheme);

        } catch (err) {
            res.status(500).json(err.message);
        };
    },



    /**
    * Controls endpoint GET /v1/api/admin/themes/:themeId
    */
    deleteTheme: async (req, res) => {

        try {
            // We get the id in the parameters of the request
            const { themeId } = req.params;
            // We check the theme id in the database
            const theme = await Theme.findOne(themeId);

            // If it exists, we delete the record in database
            const deleteTheme = await theme.delete();
            res.status(200).json(deleteTheme);
    } catch(err) {
        res.status(404).json(err.message);
    };
}

};

module.exports = themeController;
