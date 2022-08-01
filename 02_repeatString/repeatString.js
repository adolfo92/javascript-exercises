const repeatString = function(word,n) {

    finalStr = '';

    if (n<0){return "ERROR"}

    while(n){

        finalStr=finalStr+word;

        n--;

    }

    return finalStr
};

// Do not edit below this line
module.exports = repeatString;
