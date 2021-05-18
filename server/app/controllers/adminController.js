const User = require('../models/user');

const { EXTERNAL_API_KEY, EXTERNAL_API_BASE_URL} = process.env;

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
            await fetch(`${EXTERNAL_API_BASE_URL}/api/check_email`, {
                method: 'POST',
                body: form,
                headers: {
                    'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
                }
            }).then(res => res.json())
                .then(json => emailUser = json);

            if (!emailUser.success) {
                res.status(404).json(emailUser.message);
            } else {
                //    we search the user in the O'Clock API to confirm this user has the teacher role
                let apiUser;
                await fetch(`${EXTERNAL_API_BASE_URL}/api/user/${emailUser.data.id}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
                    }
                }).then(res => res.json())
                    .then(json => apiUser = json);
                

                if (!apiUser.success) {
                    res.status(404).json(apiUser.message);
                } else {
                    // if the user doesn't have the teacher role
                    if (!apiUser.data.is_teacher) {
                        res.status(401).json(`Yo désolé, l'utilisateur que vous proposez n'est pas dans la team des profs ! Il faut porter plainte contre Simon ou contactez simplement l'administration d'Oclock`);
                    } else {
                        // the user has the teacher role: we check if they exist in our database yet
                        const theInternalUser = await User.checkByApiId(apiUser.data.id);

                        // If no user is found in our database, it means the user is connecting for the first time to our app
                        // we create a new record in our user table
                        if (!theInternalUser) {
                            // We create a new user with admin status true
                            const theNewUser = await new User({ api_user: apiUser.data.id, admin_status: true });
                            await theNewUser.save();
                           
                            apiUser.oap_id = theNewUser.id;
                            apiUser.oap_admin_status = theNewUser.admin_status;
                            apiUser.message = `Vous avez ajouté un nouvel admin ! Bienvenue au nouveau Jedi !`;

                        } else {
                            // if the user is found in our database
                            // we update its admin_status to true if not already true
                            if (!theInternalUser.admin_status) {
                                theInternalUser.admin_status = true;
                            }
                            await theInternalUser.save();
                            apiUser.oap_id = theInternalUser.id;
                            apiUser.oap_admin_status = theInternalUser.admin_status;
                            apiUser.message = `Vous avez ajouté un nouvel admin ! Bienvenue au nouveau Jedi !`;
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


    /**
    * Controls endpoint GET /v1/api/admin/students
    */
   getAllStudentsWithPromo : async (_,res) => {
    
     
    try {
        const promoIds = [];
        let completelyReceiveAllPromos;

        /** 
        * we call the cockpit API to retrieve each promo id 
        * we choose the method and we put the API key in the header
        */

        await fetch(`${EXTERNAL_API_BASE_URL}/api/cohorts`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
            }} ).then(res => res.json())
        .then(json => completelyReceiveAllPromos = json);

        takeDetailsEachPromo = completelyReceiveAllPromos.data;
        
        for (const properties of takeDetailsEachPromo ){
            promoIds.push(properties.id)   
        }

        /** 
        * We loop on this array to do the next step
        * we call the external route to get all the students of each promo based on the promo id
        */ 
        
        for (const idOnlyOnePromo of promoIds){
            const users = [];
            let onePromo;
            await fetch(`${EXTERNAL_API_BASE_URL}/api/cohort/${idOnlyOnePromo}`, {
                method: 'GET',
                headers: {
                    'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
                }} ).then(res => res.json())
            .then(json => onePromo = json);
        
            for(const student of onePromo.data.users){
                // if the user is type 'regular' (if they are a student)
                if(student.type === 'regular'){

                let detailedInfo;
                await fetch(`${EXTERNAL_API_BASE_URL}/api/user/${student.id}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
                        }
                }).then(res => res.json())
                .then(json => detailedInfo = json);

                // we add the detailed info to our student object
                student.detailedInfo = detailedInfo.data;
                   
                
                // we lookup the cohorts of the student 
                let cohortsInfo;
                await fetch(`${EXTERNAL_API_BASE_URL}/api/user/${student.id}/cohorts`, {
                        method: 'GET',
                        headers: {
                            'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
                        }
                }).then(res => res.json())
                .then(json => cohortsInfo = json);

                // we add the cohorts data to our student object
                student.cohortsInfo = cohortsInfo.data;

                // we lookup the user in our internal database
                const theInternalUser = await User.checkByApiId(student.id);

                if(!theInternalUser){
                    // we add the internal user id to our student object 
                    student.oap_id = null;
                } else {
                    student.oap_id = theInternalUser.id;
                };
                
                // we push the enriched student object in the users array
                    users.push(student);
                };
                
            };
        // we return the users array as json to the client
        res.status(200).json(users);
        
        };
 
        
    } catch(err){
        res.status(500).json(err.message);
    };
},


};

module.exports = adminController;