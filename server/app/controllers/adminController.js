const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');

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
            let emailUser;
            await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/check_email`, {
                method: 'POST',
                body: form,
                headers: {
                    'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
                }
            }).then(res => res.json())
                .then(json => emailUser = json);
            console.log(emailUser);

            if (!emailUser.success) {
                res.status(404).json(emailUser.message);
            } else {
                //    we search the user in the O'Clock API to confirm this user has the teacher role
                let apiUser;
                await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/user/${emailUser.data.id}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
                    }
                }).then(res => res.json())
                    .then(json => apiUser = json);
                console.log(apiUser.data.is_teacher);

                if (!apiUser.success) {
                    res.status(404).json(apiUser.message);
                } else {
                    // if the user doesn't have the teacher role
                    if (!apiUser.data.is_teacher) {
                        res.status(401).json(`This user doesnt have a teacher role in the O'Clock API`);
                    } else {
                        // the user has the teacher role: we check if they exist in our database yet
                        const theInternalUser = await User.checkByApiId(apiUser.data.id);

                        // If no user is found in our database, it means the user is connecting for the first time to our app
                        // we create a new record in our user table
                        if (!theInternalUser) {
                            // We create a new user with admin status true
                            const theNewUser = await new User({ api_user: apiUser.data.id, admin_status: true });
                            await theNewUser.save();
                            console.log(theNewUser);
                            apiUser.oap_id = theNewUser.id;
                            apiUser.oap_admin_status = theNewUser.admin_status;

                        } else {
                            // if the user is found in our database
                            // we update its admin_status to true if not already true
                            if (!theInternalUser.admin_status) {
                                theInternalUser.admin_status = true;
                            }
                            await theInternalUser.save();
                            apiUser.oap_id = theInternalUser.id;
                            apiUser.oap_admin_status = theInternalUser.admin_status;
                        }
                        // Now the user has been created/updated withe admin status, we return the full apiUser object
                        res.status(200).json(apiUser);
                    }
                }
            }

        } catch (err) {
            res.status(500).json(err.message);
        }

    },
}



module.exports = adminController;