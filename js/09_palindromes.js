const palindromes = function (inputstring) {
    const cleanString = inputstring.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    const reversedString = cleanString.split('').reverse().join('');
    
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

/* const palindromes = function (inputstring) {
    const cleanString = inputstring.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Using reduce to check if the string is a palindrome
    // This implementation uses reduce to compare each character with its corresponding 
    // character from the end of the string. The accumulator starts as true and remains 
    // true only if all character pairs match.
    const isPalindrome = cleanString.split('').reduce((result, char, index) => {
        return result && char === cleanString[cleanString.length - 1 - index];
    }, true);
    
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes; */

/* const palindromes = function (inputstring) {
    const cleanString = inputstring.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Using every to check if each character matches its mirror position
    // The every method checks if all elements in the array satisfy the provided 
    // testing function, which in this case checks if each character matches its 
    // corresponding character from the end.
    const isPalindrome = cleanString.split('').every((char, index) => {
        return char === cleanString[cleanString.length - 1 - index];
    });
    
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes; */