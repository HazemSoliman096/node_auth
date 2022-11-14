const express = require('express');
const middlewares = require('./middlewares/middlewares')

const app = express();

app.use(middlewares.middleware1);
app.use(middlewares.middleware2);

app.get('/', middlewares.middleware3, (req, res, next) => {
  console.log('I\'m standard callback');
  res.send("<h1>Hello, World!</h1>");
});

app.listen(3000); 