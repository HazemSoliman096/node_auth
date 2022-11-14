const express = require('express');

const middlewares = require('./middlewares/middlewares');
const errorHandler = require('./middlewares/errorHandlers');

const app = express();

app.use(middlewares.middleware1);
app.use(middlewares.middleware2);

app.get('/', (req, res, next) => {
  console.log('I\'m standard callback');
  res.send(`<h1>The value is ${req.customProperty}</h1>`);
});

app.use(errorHandler.errorHandler);

app.listen(3000); 