exports.notFound = (req, res) => {
  const err = {
    status: 404,
    message: 'Not Found',
  };
  res.status(404).json(err);
};
