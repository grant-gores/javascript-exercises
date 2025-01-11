const convertToCelsius = function(fahrenheit) {
  let celsius = 5/9*(fahrenheit-32);
  let result = Math.round(celsius * 10)/10
  return result;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  let result = Math.round(fahrenheit * 10)/10
  return result;
};

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
