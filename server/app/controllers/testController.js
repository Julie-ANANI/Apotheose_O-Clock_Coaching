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
        method: 'GET',
        headers: {
            'X-AUTH-TOKEN': `${auth_token}`
          }} ).then(res => res.json())
              .then(json => searchtest = json);
            res.status(200).json(searchtest);
    } catch (error) {
        res.status(500).json(error.message);
    }
      
        
        
},

searchByPromo : async (req,res) => {
    // appeler la route externe qui récupère toutes les promos
    let auth_token = process.env.EXTERNAL_API_KEY
    try {
        const idPromos = [];
        let allPromos;
        // récupèrer l'id de chaque promo dans un tableau
        await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/${process.env.ENDPOINTS_PROMOS}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': `${auth_token}`
              }} ).then(res => res.json())
        .then(json => allPromos = json);
        console.log(` toute la route tous les promos ${allPromos}`);
        getIDofPromo = allPromos.data;
        
        for (const properties of getIDofPromo ){
             console.log(`propriétés ${properties.id}`);   
             idPromos.push(properties.id)   
        }


       for (const props of idPromos) {console.log(props)}

   
    // On boucle ce tableau pour faire l'étape suivante
    // appeler la route externe qui récupère les étudiant d'une seule promo avec son id
    for(const idPromo of idPromos){
        const users = [];
        let onePromo;
        await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/${process.env.ENDPOINT_PROMO}/${idPromo}`, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': `${auth_token}`
              }} ).then(res => res.json())
        .then(json => onePromo = json);
        console.log(onePromo)
        for(const student of onePromo.data.users){
            console.log(`student ${student}`);
            if(student.type === 'regular'){
                users.push(student);
            };
            console.log(users);
        };
        // On récupère toutes les informations et les "coller" dans un nouveau tableau pour la renvoyer
        allPromos.data.push(users);
        };
        // console.log(`le nouvel objet ${allPromos}`)
        res.status(200).json(allPromos);
    } catch(err){
        res.status(500).json(err.message);
    };
}

};

module.exports = testController;