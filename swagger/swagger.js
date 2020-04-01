var os = require("os");
const Config = require('../config');
const fs = require("fs");

let hostName;

hostName = `localhost:${Config.dbConfig.config.PORT}`;

console.log(hostName);
const swaggerDefinition = {
    swagger: "2.0",
    info: {
      title: "Node API's",
      version: '2.0.0',
      description: 'Endpoints to test the user registration routes',
    },
    host: hostName,
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };
  
  const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
  };

  module.exports = options;