const removeFromArray = function(array,b) {


    indexOfRemoved = array.findIndex((find)=>find==b);

    array.splice(indexOfRemoved,1);

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
