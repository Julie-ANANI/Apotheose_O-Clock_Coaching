require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');


const { EXTERNAL_API_KEY, EXTERNAL_API_BASE_URL, ENDPOINTS_PROMOS, ENDPOINT_PROMO} = process.env;

const testController = {
    /**
    * Route POST /v1/api/login
    */
   searchArray2: async (req, res) => {
  
//     let auth_token = process.env.EXTERNAL_API_KEY
//     console.log(auth_token);

//     // const form = new FormData();
//     // form.append('x-auth', auth_token);
    
//      console.log(req.body);
   
//     try {
//         if(req.body){
//         let searchUser;
//         const rtest = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/${process.env.ENDPOINT_PROMOS}`, {
//             method: 'POST',
//             headers: {
//                 'authorization': `Bearer ${auth_token}`
//               }
//     }).then(res => console.log (res))
//     .then(res.json())
//           .then(json => searchUser = json);
//           console.log(res.headers.get('content-type'));
//   console.log(rtest);
// }
//   res.status(200).json({
//     status: 'succes',
//     data: req.body,
//   })

//     } catch (err) {
//         res.status(500).json(err.message);
//     };

},


searchArray: async (req, res)=> {

    try {
        completelyReceivecompletelyReceiveAllPromos = {};
       await fetch(`${EXTERNAL_API_BASE_URL}/api/${ENDPOINTS_PROMOS}`, {
        method: 'GET',
        headers: {
            'X-AUTH-TOKEN': `${EXTERNAL_API_KEY}`
          }} ).then(res => res.json())
              .then(json => completelyReceivecompletelyReceiveAllPromos = json);
            res.status(200).json(completelyReceivecompletelyReceiveAllPromos);
    } catch (error) {
        res.status(500).json(error.message);
    }
      
        
        
},

searchByPromo : async (req,res) => {
  
    try {
        const idForEachPromo = [];
        let completelyReceiveAllPromos;

        /** 
        * consumed the cockpit API to retrieve each id 
        * we choose the method and we put the API key in the header
        */

        await fetch(`${EXTERNAL_API_BASE_URL}/api/${ENDPOINTS_PROMOS}`, {
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
    
    for(const idOnlyOnePromo of idForEachPromo){
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
}

};

module.exports = testController;