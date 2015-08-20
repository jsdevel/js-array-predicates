module.exports = function byPropVal(prop, value) {
  return function(obj) {
    return obj && obj[prop] == value;
  };
};
