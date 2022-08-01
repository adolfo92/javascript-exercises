const removeFromArray = function(array,b) {

    for(itemIndex = 1; itemIndex<arguments.length;itemIndex++){

        indexOfRemoved = array.findIndex((find)=>find==arguments[itemIndex]);

        if (indexOfRemoved == -1) continue; //Si no consigue nada el metodo .findIndex() retorna -1

        array.splice(indexOfRemoved,1);

        


    }

   

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
