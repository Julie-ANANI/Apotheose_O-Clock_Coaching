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

        } catch (err) {
            /**
            * There is no this user in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        }
    },


    /**
    * Route POST /v1/api/login
    */
    login: async (req, res) => {

        try {

            // we try to authenticate the user with external API
            // we get the email and password from the request body
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

            if (!apiUser.success) {
                res.status(404).json(apiUser.message);
            }
            // If the authentication succeeds, the API sends a user object
            // based on the user object returned when testing the external API in Insomnia,
            // it seems the api user id is available in the property data.id (to confirm)
            let theNewUser;
            // We lookup that api user id in our database
            const theInternalUser = await User.checkByApiId(apiUser.data.id);

            if (!theInternalUser) {
                // If no user is found in our database, it means the user is connecting for the first time to our app
                // we create a new record in our user table
                theNewUser = await new User({
                    api_user: `${apiUser.data.id}`,
                    admin_status: false
                });
                const saved = await theNewUser.save();
                // we append its 'internal id' and 'admin status' properties to the external api user object we fetched earlier
                apiUser.oap_id = saved.id;
                apiUser.oap_admin_status = theNewUser.admin_status;
            } else {
                // if the user is found in our database
                // we append its 'internal id' and 'admin status' properties to our main api user object
                apiUser.oap_id = theInternalUser.id;
                apiUser.oap_admin_status = theInternalUser.admin_status;
            };

            // Now the user is connected, we store their info in the session
            req.session.user = {
                oap_admin_status: apiUser.oap_admin_status,
                is_student: apiUser.data.is_student
            };

            // We send this full object containing external and internal API info to the client
            res.status(200).json(apiUser);


        } catch (err) {
            res.status(500).json(`L'email doit être celui utilisé dans le cockpit`);
        };
    },

    logout: (req, res) => {
        req.session.destroy(err => {
            if (err) {
                return console.log(err);
            }
            console.log('***** req.session dans la route logout');
            console.log(req.session);
            res.clearCookie('sessionId', { path: '/', domain: 'localhost' }).status(200).json(`Vous êtes bien déconnecté`);
        });

    }

};

module.exports = userController;
