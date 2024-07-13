const sumAll = function(a, b) {


if (a <0 || b<0 ) {
  return "ERROR";
}

if (typeof a !== 'number' || typeof b !== 'number') {
  return "ERROR";
}

let sum = 0;
let totalSteps = Math.abs(a-b)+1;
let start = a<b ? a : b;

for (let step = start; step <= totalSteps; step++) {
  sum = sum + step;
  //console.log('x',a,b,totalSteps,step,sum);
}

//console.log('sum: ',sum);
return sum;


};

//sumAll(1,4);


// Do not edit below this line
module.exports = sumAll;
