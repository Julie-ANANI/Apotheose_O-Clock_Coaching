//return data user in the api 
const request = require('supertest');
const makeApp = require('../app');
const Theme = require('../app/models/theme');
// const database = require('../app/database')
// const makeApp  = require('../index')

//equivalent example make app
// const { themeController } = require('../app/controllers/themeController');

describe('#addNewTheme(req,res)', () => {
//create mock request 
//create mock response

// 1 test donne un titre, une description et une position

// 2 test ne créer pas de nouveau theme si la string existe déjà renvoi 400

// 3 retourne le status 201

// 4 retourne un objet json 

//5 retourne un objet header avec le type json
  
//create a example theme like real database

// //BEFORE TEST 
// beforeEach(async () => {
//     // await Theme.delete({});
//     await new Theme(theme1).save();
// })



        // test("should respond with a 200 status code", async () => {
        //     const res = await request(app).post("/users").send({
        //       title: theme1.title,
        //       description: theme1.description,
        //       position: theme1.position
        //     })
        //     expect(res.statusCode).toBe(201)
        //   })



})

// const theme1 = {
    
//     "id": 2,
//     "title": "Créer un profil Linkedin",
//     "description": "En moyenne, un recruteur passe 15 secondes sur le CV",
//     "position": 2,
//     "created_at": "2021-05-23T11:39:49.978Z",
//     "modified_at": "2021-05-23T11:39:49.978Z"
  
// }