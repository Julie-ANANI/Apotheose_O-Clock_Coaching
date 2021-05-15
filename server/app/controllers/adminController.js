const { default: fetch } = require('node-fetch');
const User = require('../models/user');


const adminController = {
    addAdmin: async (req, res) => {
        // We get the email in request body
        const { login_email } = req.body;
        const obj = {};
        obj.email = login_email;
        console.log(obj);
        // We look it up in the external api to identify its external api user id
        const response = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/check_email`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
                // We need to get an API KEY and to store it in the .env file
                'X-AUTH-TOKEN': process.env.EXTERNAL_API_KEY
            }
        });

        const apiUser = await response.json();
        console.log(apiUser);

        if (!apiUser.success) {
            res.status(401).json(`${apiUser.message}`);
        } else {
            // we lookup the external api user in our database
            const theInternalUser = await User.findOneByApiId(apiUser.data.id);

            // If no user is found in our database, it means the user is connecting for the first time to our app
            // we create a new record in our user table
            if (!theInternalUser) {
                // We create a new user with admin status true
                const theNewUser = new User({ api_user: apiUser.data.id, admin_status: true });
                theNewUser.save();
                res.status(200).json(theNewUser);
            } else {
                // if the user is found in our database
                // we update its admin_status to true
                theInternalUser.admin_status = true;
                theInternalUser.save();
                res.status(200).json(theInternalUser);
            }

        }
    }
};

module.exports = adminController;