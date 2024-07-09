const repeatString = function(text, repeat) {
 if(repeat<0)
  return "ERROR"

 let repeatText = "";
 for(let i=0; i<repeat; i++){
   repeatText = repeatText + text;
 }
 return repeatText;
};

// Do not edit below this line
module.exports = repeatString;
