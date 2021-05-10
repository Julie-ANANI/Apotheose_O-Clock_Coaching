require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');


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
        // we check if the user is available in session (req.session.user)
        // if it is, we send the object back as json
        if (req.session.user) {
            res.json(req.session.user);
        } else {
            // if not, we try to authenticate the user with external API
            // we get the email and password from the request body
            const { login_email, login_password } = req.body;

            // for now, the fetch doesn't work, it returns "{ success: false, message: 'Identifiants invalides.', data: [] }"
            try {
                await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/try_login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        login_email: `${login_email}`,
                        login_password: `${login_password}`
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        // We need to get an API KEY and to store it in the .env file
                        'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
                    }
                }).then(res => res.json())
                    .then(json => console.log(json))
                    .catch(err => console.log(err.message));

                const apiUser = json;
                console.log(apiUser);

                // if the API call returns false, we send an authentication error
                if (!apiUser) {
                    res.status(500).json('Authentication failed');
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
                        apiUser.admin_status = theInternalUser.admin_status;
                    } else {
                        // if the user is found in our database
                        // we append its 'internal id' and 'admin status' properties to our main api user object
                        apiUser.oap_id = theInternalUser.id;
                        apiUser.admin_status = theInternalUser.admin_status;
                    }

                    // Now the user is connected, we store their info in the session
                    req.session.user = apiUser;

                    // We send this full object containing external and internal API info to the client
                    res.status(200).json(apiUser);
                }

            } catch (err) {
                res.status(500).json(err.message);
            }
        }
    },
}

module.exports = userController;