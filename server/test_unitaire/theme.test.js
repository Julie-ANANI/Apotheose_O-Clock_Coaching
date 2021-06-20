//return data user in the api 
const request = require('supertest');
const app = require('../app');
const Theme = require('../app/models/theme');
// const database = require('../app/database')
// const makeApp  = require('../index')

//equivalent example make app
// const { themeController } = require('../app/controllers/themeController');

const theme = {
    
        "id": 2,
        "title": "Créer un profil Linkedin",
        "description": "En moyenne, un recruteur passe 15 secondes sur le CV",
        "position": 2,
        "created_at": "2021-05-23T11:39:49.978Z",
        "modified_at": "2021-05-23T11:39:49.978Z"
      
}

    describe('#addNewTheme(req,res)', () => {



    })