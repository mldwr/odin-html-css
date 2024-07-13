const convertToCelsius = function(tmprt) {
  let p = Math.pow(10, 1);
  let num = (tmprt - 32) * 5/9;
  return Math.round(num * p) / p;
};

const convertToFahrenheit = function(tmprt) {
  let p = Math.pow(10, 1);
  let num = (tmprt * 9/5 +32);
  return Math.round(num * p) / p;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
