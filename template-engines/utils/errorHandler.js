const NotFoundError = (req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: "NotFound",
      message: "Route Not Found!",
    },
    data: null,
  });
};

const GlobalErrorHandler = (error, req, res, next) => {
  return res.json({
    statusCode: error.status || 500,
    error: {
      message: error.message || "Internal Server Error",
    },
  });
};

module.exports = {
  NotFoundError,
  GlobalErrorHandler,
};
