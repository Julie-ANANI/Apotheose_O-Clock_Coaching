require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');


const userController = {
    /**
    * It's control the road GET /v1/api/users
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
    * It's control the road GET /v1/api/users/:id
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
        // we try to authenticate the user with external API
        // we get the email and password from the request body
        const { login_email, login_password } = req.body;

        const form = new FormData();
        form.append('login_email', login_email);
        form.append('login_password', login_password);

        // the fetch returns "{ success: false, message: 'Identifiants invalides.', data: [] }"
        try {
            const response = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/try_login`, {
                method: 'POST',
                body: form,
                headers: {
                    'Content-Type': 'form-data',
                    'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
                }
            });
            console.log(response.status);
        const apiUser = await response.json();
        console.log(apiUser);
            // .then(res => res.json())
            //     .then(json => console.log(json))
            //     .catch(err => console.log(err.message));

            // if the API call returns false, we send an authentication error
            if (!apiUser.success) {
                res.status(401).json(`Authentication failed : ${apiUser.message}`);
            } else {
                // If the authentication succeeds, the API sends a user object
                // based on the user object returned when testing the external API in Insomnia,
                // it seems the api user id is available in the property data.id (to confirm)
                // console.log(apiUser.data.id);

                // We lookup that api user id in our database
                const theInternalUser = await User.findOneByApiId(apiUser.data.id);

                // If no user is found in our database, it means the user is connecting for the first time to our app
                // we create a new record in our user table
                if (!theInternalUser) {
                    // If we don't specify admin_status, it will be set to false by default upon saving
                    const theNewUser = new User({ api_user: apiUser.data.id });
                    theNewUser.save();
                    // we append its 'internal id' and 'admin status' properties to the external api user object we fetched earlier
                    apiUser.oap_id = theNewUser.id;
                    apiUser.oap_admin_status = theNewUser.admin_status;
                } else {
                    // if the user is found in our database
                    // we append its 'internal id' and 'admin status' properties to our main api user object
                    apiUser.oap_id = theInternalUser.id;
                    apiUser.oap_admin_status = theInternalUser.admin_status;
                }

                // Now the user is connected, we store their info in the session
                // TODO: keep only lastname and firstname
                req.session.user = apiUser;

                // We send this full object containing external and internal API info to the client
                // TODO: voir avec le front quelles propriétés garder dans l'apiUser
                res.status(200).json(apiUser);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    },


    logout: (req, res) => {
        req.session.user = false;
        res.status(204).json('User successfully logged out in back-end');
    }

}

module.exports = userController;