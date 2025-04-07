const findTheOldest = function(inputobj) {
    const currentYear = new Date().getFullYear();
    
    // Map: Transform each person object to include their age
    const peopleWithAges = inputobj.map(person => {
        const age = person.yearOfDeath 
            ? person.yearOfDeath - person.yearOfBirth
            : currentYear - person.yearOfBirth;
        return { ...person, age };
    });
    
    // Reduce: Find the person with the maximum age
    return peopleWithAges.reduce((oldest, current) => {
        return current.age > oldest.age ? current : oldest;
    }, peopleWithAges[0]);
};

// Do not edit below this line
module.exports = findTheOldest;