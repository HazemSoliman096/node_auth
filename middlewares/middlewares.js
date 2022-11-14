const middleware1 = (req, res, next) => {
  console.log('I\'m a middleware 1');
  const error = new Error('I\'m an error');
  next(error);
};

module.exports = {
  middleware1,
};