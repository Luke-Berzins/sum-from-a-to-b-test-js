
function sum(fromN, toN) {
  if (fromN > toN) {
    return 0;
  }
  return fromN + sum(fromN + 1, toN);
};


console.log(sum(4, 8))


//
module.exports = sum;
