function parseParamsToObject(element) {
  return (req, res, next) => {
    let qKeys = Object.keys(req[element]);

    qKeys.forEach(qKey => {
      let value = req[element][qKey];
      try {
        value = JSON.parse(value);
        if (typeof value == 'object') req[element][qKey] = value;
      } catch (error) {
        return;
      }
    });

    next();
  };
}

module.exports = {
  parseQueryParamsToObject: parseParamsToObject('query'),
  parseBodyParamsToObject: parseParamsToObject('body')
};
