const getTheTitles = function(inputjson) {

    const titles = inputjson.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;