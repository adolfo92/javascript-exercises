const reverseString = function(words) {

    wordArray = [];

    for(i=0;i<(words.length);i++){

        wordArray.push(words.charAt(i));
    }

    inverseArray = wordArray.reverse();
    
    finalWord = '';

    for (character of inverseArray){
        finalWord=finalWord+character;
    }

    return finalWord;

};

// Do not edit below this line
module.exports = reverseString;
