const middleware1 = (req, res, next) => {
  console.log('I\'m a middleware 1');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('I\'m a middleware 2');
  next();
};

const middleware3 = (req, res, next) => {
  console.log('I\'m a middleware 3');
  next();
};

module.exports = {
  middleware1,
  middleware2,
  middleware3,
};