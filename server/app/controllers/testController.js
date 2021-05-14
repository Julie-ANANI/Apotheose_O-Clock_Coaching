require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');

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

        let auth_token = process.env.EXTERNAL_API_KEY
        //     console.log(auth_token);
        searchtest = {};
       await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/${process.env.ENDPOINTS_PROMOS}`, {
        method: 'POST',
        headers: {
            'X-AUTH-TOKEN': `${auth_token}`
          }} ).then(res => res.json())
              .then(json => searchtest = json);
             res.status(200).json(searchtest);
    } catch (error) {
        res.status(500).json(error.message);
    }
      
        
        
},

};

module.exports = testController;