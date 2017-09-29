module.exports = function(req, res, next) {
  const isHC =
    (req.headers["user-agent"] &&
      req.headers["user-agent"].indexOf("GoogleHC") > -1) ||
    false;
  if (isHC) return res.sendStatus(200);
  next();
};
