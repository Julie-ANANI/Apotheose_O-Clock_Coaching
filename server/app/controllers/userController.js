const User = require('../models/user');

const userController = {
    /**
    * Controls endpoint GET /v1/api/users
    */
    getAllusers: async (_, res) => {
   
        try{
            /* *
             * All the users are retrieved from the database
             */
            const allUsers = await User.findAll();
            res.status(200).json(allUsers);

        } catch (err) {
            /**
            * There are no users in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }

    },


    /**
    * Controls endpoint GET /v1/api/users/:id
    */
    getOneUser: async (req, res) => {

        try {
            /* *
             * We get the id in the parameters of the request
             */
            const { id } = req.params;

            const onlyOneUser = await User.findOne(id);
            res.status(200).json(onlyOneUser);

        } catch(err) {
            /**
            * There is no this user in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }
    },

};

module.exports = userController;