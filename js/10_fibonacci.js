const fibonacci = function(n) {
    n = parseInt(n);
  
    if (n < 0) return "OOPS";
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    const current = Array(n-1).fill().reduce(([prev,curr]) => [curr,prev + curr], [0,1])[1];
    
    return current;
};

// Do not edit below this line
module.exports = fibonacci;