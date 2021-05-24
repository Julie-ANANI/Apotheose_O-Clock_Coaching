require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');

const userController = {
    /**
    * Controls endpoint GET /v1/api/users
    */
    getAllusers: async (_, res) => {

        try {
            // We get all the users are retrieved from the database
            const allUsers = await User.findAll();
            res.status(200).json(allUsers);

        } catch (err) {
            res.status(404).json(err.message);
        }

    },


    /**
    * Controls endpoint GET /v1/api/users/:id
    */
    getOneUser: async (req, res) => {

        try {
            // We get the id in the params of the request
            const { id } = req.params;

            const onlyOneUser = await User.findOne(id);
            res.status(200).json(onlyOneUser);

        } catch (err) {
            res.status(404).json(err.message);
        }
    },


    /**
    * Route POST /v1/api/login
    */
    login: async (req, res) => {

        try {

            // we try to authenticate the user with external API
            // to do so, we get the email and password from the request body
            const { login_email, login_password } = req.body;

            const form = new FormData();
            form.append('login_email', login_email);
            form.append('login_password', login_password);

            let apiUser;
            await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/try_login`, {
                method: 'POST',
                body: form
            }).then(res => res.json())
                .then(json => apiUser = json);

            // if we get an answer from the API, but it is a fail, we return the error message from the API
            if (!apiUser.success) {
                res.status(404).json(apiUser.message);
            }
            // If the authentication succeeds, the API sends a user object
            // We lookup that api user id in our database
            const theInternalUser = await User.checkByApiId(apiUser.data.id);

            if (!theInternalUser) {
                // If no user is found in our database, it means the user is connecting for the first time to our app
                // we create a new record in our user table
                const theNewUser = await new User({
                    api_user: `${apiUser.data.id}`,
                    admin_status: false
                });
                const saved = await theNewUser.save();
                // we append its 'internal id' and 'admin status' properties to the external api user object we fetched earlier
                apiUser.oap_id = saved.id;
                apiUser.oap_admin_status = theNewUser.admin_status;
            } else {
                // if the user is found in our database
                // we append its 'internal id' and 'internal admin status' properties to our external api user object
                apiUser.oap_id = theInternalUser.id;
                apiUser.oap_admin_status = theInternalUser.admin_status;
            };

            // We send this full object containing external and internal API info to the client
            res.status(200).json(apiUser);


        } catch (err) {
            res.status(500).json(`L'email doit être celui utilisé dans le cockpit`);
        };
    },

    logout: (req, res) => {
        // We will add req.session.destroy when adding the session system
        res.status(200).json(`Vous êtes bien déconnecté`);
    },

};

module.exports = userController;
