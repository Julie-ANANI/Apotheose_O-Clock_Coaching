const request = require('supertest')

// //recup server
const app = require('../app');

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/admin/themes')
        .send({
            title: "Créer un profil Linkedin",
            description: "En moyenne, un recruteur passe 15 secondes sur le CV"
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('post');
    });

})