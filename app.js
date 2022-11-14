const express = require('express');
const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const sessionStore = new PrismaSessionStore(
  prisma,
  {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }
);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: 'somsecret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.get('/', (req, res) => {
  res.send('<h1>Hello World Session</h1>')
});

app.listen(3000);