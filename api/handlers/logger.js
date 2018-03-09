exports.devLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.info(`→ ${req.method} ${req.path} - ${req.ip}`);
    res.on('finish', () => {
      console.info(
        `→ ${res.statusCode} ${res.statusMessage}; ${res.get(
          'Content-Length'
        ) || 0}b sent`
      );
    });
  }
  return next();
};
