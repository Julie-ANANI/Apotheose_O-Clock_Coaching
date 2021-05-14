require('dotenv').config();
const User = require('../models/user');
const fetch = require('node-fetch');
const FormData = require('form-data');

const testController = {
    /**
    * Route POST /v1/api/login
    */
   searchArray: async (req, res) => {
  
    let auth_token = process.env.EXTERNAL_API_KEY
    console.log(auth_token);

    const form = new FormData();
    // form.append('x-auth', auth_token);
    
     console.log(req.body);
   
    try {
        if(req.body){
        let searchUser;
        const rtest = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/api/${process.env.ENDPOINT_PROMOS}`, {
            method: 'POST',
            body : form ,
            headers: {
                // 'Content-Type': 'application/json',
                'authorization': `Bearer ${auth_token}`
              }
    }).then(res => console.log (res))
    .then(res.json())
          .then(json => searchUser = json);
          console.log(res.headers.get('content-type'));
  console.log(rtest);
}
  res.status(200).json({
    status: 'succes',
    data: req.body,
  })

    } catch (err) {
        res.status(500).json(err.message);
    };

},

};

module.exports = testController;