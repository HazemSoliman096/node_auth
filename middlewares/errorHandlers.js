const errorHandler = (err, req, res, next) => {
  if(err) {
    res.send('<h1>There\'s an error</h1>');
  }
}

module.exports = {
  errorHandler,
};