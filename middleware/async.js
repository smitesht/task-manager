const asyncWrapper = (fn) => {
  return async (req, resp, next) => {
    try {
      await fn(req, resp, next);
    } catch (error) {
      console.log("******** ERROR **********");
      next(error);
    }
  };
};

module.exports = asyncWrapper;
