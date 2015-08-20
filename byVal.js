module.exports = function byVal(val) {
  return function(item) {
    return item == val;
  };
};
