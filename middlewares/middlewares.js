const middleware1 = (req, res, next) => {
  console.log('I\'m a middleware');
  next();
}

const expressCallback = (req, res, next) => {
  console.log('I\'m standard callback');
  res.send("<h1>Hello, World!</h1>");
}

module.exports = {
  expressCallback,
  middleware1,
}