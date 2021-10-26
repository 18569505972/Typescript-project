const basicConfig = require('./eslint_common/basic.config');
const reactConfig = require('./eslint_common/react.config');
const tsConfig = require('./eslint_common/typescript.config');
const prettierConfig = require('./eslint_common/prettier.config');

module.exports =  Object.entries(basicConfig).reduce((prev, [key, value]) => {
  if (Array.isArray(value)) {
    prev[key] = [
      ...value,
      ...(reactConfig[key] || []),
      ...(tsConfig[key] || []),
      ...(prettierConfig[key] || []),
    ];
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    prev[key] = {
      ...value,
      ...(reactConfig[key] || {}),
      ...(tsConfig[key] || {}),
      ...(prettierConfig[key] || {}),
    };
  } else {
    prev[key] = value;
  }
  return prev;
}, {});
