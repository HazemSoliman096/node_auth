const express = require('express');
const middlewares = require('./middlewares/middlewares')

const app = express();

app.use(middlewares.middleware1);

app.get('/', middlewares.expressCallback);

app.listen(3000);