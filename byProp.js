module.exports = function byProp(prop) {
  return function(obj) {
    return obj && prop in obj;
  };
};
