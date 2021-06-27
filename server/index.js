const app = require('./app');

const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {

      info: {
          description: 'A coaching REST API',
          title: 'Coaching',
          version: '1.0.0',
      },
      host: `localhost:${PORT}`,
      basePath: '/v1/api',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
          JWT: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: "",
          }
      }
  },
  basedir: __dirname, //app absolute path
  files: [
      './app/router.js',
      './app/models/*.js'
  ] //Path to the API handle folder
};

expressSwagger(options);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on : localhost:${PORT}/v1`)
});


