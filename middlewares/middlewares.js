const middleware1 = (req, res, next) => {
  req.customProperty = 100
  next();
};

const middleware2 = (req, res, next) => {
  console.log(`The custom Prperty is : ${req.customProperty}`);
  req.customProperty = 600;
  next();
};

module.exports = {
  middleware1,
  middleware2,
};