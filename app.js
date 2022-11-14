const express = require('express');

const middlewares = require('./middlewares/middlewares');
const errorHandler = require('./middlewares/errorHandlers');

const app = express();

app.use(middlewares.middleware1);

app.get('/', (req, res, next) => {
  console.log('I\'m standard callback');
  res.send("<h1>Hello, World!</h1>");
});

app.use(errorHandler.errorHandler);

app.listen(3000); 