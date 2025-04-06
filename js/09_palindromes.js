const palindromes = function (inputstring) {
    const cleanString = inputstring.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    const reversedString = cleanString.split('').reverse().join('');
    
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;