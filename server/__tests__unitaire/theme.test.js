//return data user in the api 
const request = require('supertest');
const makeApp = require('../app');
const themeController = require('../app/controllers/themeController');
const Theme = require('../app/models/theme');

/** 
 *  -1 I create database test because reset for each test
  */
// const database = require('../app/database')
// const makeApp  = require('../index')

//equivalent example make app
// const { themeController } = require('../app/controllers/themeController');
// const save = jest.fn()

// const app = themeController({
//     save,
    
// })
const theme1 = {
    
    "id": 2,
    "title": "Créer un profil Linkedin",
    "description": "En moyenne, un recruteur passe 15 secondes sur le CV",
    "position": 2,
    "created_at": "2021-05-23T11:39:49.978Z",
    "modified_at": "2021-05-23T11:39:49.978Z"

}


describe('#addNewTheme(req,res)', () => {
//create mock request 
//create mock response

// test 0 check name title 
test('sould specify string in the new test theme', () => {
    // const data = {one: 1};
    // data['two'] = 2;
    expect(theme1).toContain('Créer un profil Linkedin');
    expect(new Set (theme1)).toContain('Créer un profil Linkedin');
  });
// 1 test donne un titre, une description et une position

// 2 test ne créer pas de nouveau theme si la string existe déjà renvoi 400

// 3 retourne le status 201

// 4 retourne un objet json 

//5 retourne un objet header avec le type json
// test("should specify json in the content type header", async () => {
//     const response = await request(app).post("/admin/themes/:themeId(\\d+)").send({
//       title: theme1.title,
//       description: theme1.description,
//       position: theme1.position
//     })
//     expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//   })
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

