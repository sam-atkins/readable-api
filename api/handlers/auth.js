const base64Decode = string => {
  let auth = false;
  const decodedBuffer = Buffer.from(string, 'base64').toString('ascii');
  if (process.env.AUTH_HEADERS === decodedBuffer) {
    auth = true;
  }
  return auth;
};

exports.authHeadersHandler = (req, res, next) => {
  const token = req.get('Authorization');

  if (token && base64Decode(token)) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself',
    });
  }
};
