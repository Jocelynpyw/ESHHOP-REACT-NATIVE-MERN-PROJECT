function errorhandler(err, req, res, next) {
  if (err) {
    res.status(500).json({ message: err });
  }
  next();
}

module.exports = errorhandler;
