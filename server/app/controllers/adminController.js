const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');
const interactController = require('./interactController');

const adminController = {
    /**
     * Controls endpoint POST /v1/api/admin/add
     */
    addAdmin: async (req, res) => {
        // We get the email in request body
        const { email } = req.body;

        const form = new FormData();
        form.append('email', email);

        // We look it up in the external api to identify its external api user id
        try {
            let apiUser;
            await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/check_email`, {
                method: 'POST',
                body: form,
                headers: {
                    'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
                }
            }).then(res => res.json())
                .then(json => apiUser = json);
            console.log(apiUser);

            if (!apiUser.success) {
                res.status(404).json(apiUser.message);
            } else {
                // we search the external api user in our database
                const theInternalUser = await User.checkByApiId(apiUser.data.id);
                
                // If no user is found in our database, it means the user is connecting for the first time to our app
                // we create a new record in our user table
                if (!theInternalUser) {
                    // We create a new user with admin status true
                    const theNewUser = await new User({ api_user: apiUser.data.id, admin_status: true });
                    await theNewUser.save();
                    res.status(200).json(theNewUser);

                } else {
                    // if the user is found in our database
                    // we update its admin_status to true if not already true
                    if (!theInternalUser.admin_status) {
                        theInternalUser.admin_status = true;
                    }
                    await theInternalUser.save();
                    res.status(200).json(theInternalUser);
                }
            }


        } catch (err) {
            res.status(500).json(err.message);
        }

    },
}



module.exports = adminController;