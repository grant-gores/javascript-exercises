const add = function(a, b) {
	result = a + b;
  return result;
};

const subtract = function(a,b) {
  result = a - b;
  return result;
};

const sum = function(array) {
  array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  array.reduce((product, current) => product * current, 0);
};

const power = function(a ,b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
