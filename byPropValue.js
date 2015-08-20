module.exports = function byPropValue(prop, value) {
  return function(obj) {
    return obj && obj[prop] === value;
  };
};
