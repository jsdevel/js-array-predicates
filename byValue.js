module.exports = function byValue(val) {
  return function(item) {
    return item === val;
  };
};
