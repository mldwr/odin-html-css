const removeFromArray = function(arr, ...elm) {

  elm.forEach(item=> {
        let idx;
        while ((idx = arr.indexOf(item)) !== -1) {
            arr.splice(idx, 1);
        }
    });

  return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
