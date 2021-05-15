const { default: fetch } = require('node-fetch');
const User = require('../models/user');

const { EXTERNAL_API_KEY, EXTERNAL_API_BASE_URL, ENDPOINT_PROMOS, ENDPOINT_PROMO, ENDPOINT_MAIL } = process.env;


const adminController = {
    addAdmin: async (req, res) => {
        // We get the email in request body
        const { login_email } = req.body;
        const obj = {};
        obj.email = login_email;
        console.log(obj);
        // We look it up in the external api to identify its external api user id
        const response = await fetch(`${EXTERNAL_API_BASE_URL}/api/${ENDPOINT_MAIL}`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
                // We need to get an API KEY and to store it in the .env file
                'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
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
    
    },

    /**
    * Route GET /v1/api/admin/search/Promo_id
    */
   searchByPromo : async (_,res) => {
    
    try {
        const idForEachPromo = [];
        let completelyReceiveAllPromos;

        /** 
        * consumed the cockpit API to retrieve each id 
        * we choose the method and we put the API key in the header
        */

        await fetch(`${EXTERNAL_API_BASE_URL}/api/${ENDPOINT_PROMOS}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
            }} ).then(res => res.json())
        .then(json => completelyReceiveAllPromos = json);

        takeDetailsEachPromo = completelyReceiveAllPromos.data;
        
        for (const properties of takeDetailsEachPromo ){
            idForEachPromo.push(properties.id)   
        }

    /** 
    * We loop this table to do the next step
    * call the external route which collects the students of a single promotion with its id
    */ 
    
    for (const idOnlyOnePromo of idForEachPromo){
        const users = [];
        let onePromo;
        await fetch(`${EXTERNAL_API_BASE_URL}/api/${ENDPOINT_PROMO}/${idOnlyOnePromo}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
            }} ).then(res => res.json())
        .then(json => onePromo = json);
    
        for(const student of onePromo.data.users){
        
            if(student.type === 'regular'){
                users.push(student);
            };
            
        };
        
        // We retrieve all the information without type teacher and insert user with type regular in a new array to return it
        completelyReceiveAllPromos.data[idOnlyOnePromo - 1].users = users; 
        };
        
        const customPromotionalWithUser = completelyReceiveAllPromos 
        res.status(200).json(customPromotionalWithUser);
    } catch(err){
        res.status(500).json(err.message);
    };
},


};

module.exports = adminController;