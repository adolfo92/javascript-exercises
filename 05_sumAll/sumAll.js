const sumAll = function(n1,n2) {

    let sum = 0;

    if (typeof(n1)!='number'||typeof(n2)!='number'){
        return "ERROR"
    }

    if((n1<0 || n2<0)){
        return  "ERROR"
    }

    if(n2<n1){
        let placeHolder = n2;
        n2 = n1;
        n1 = placeHolder;
    }

    for(n=n1;n<=n2;n++){
        sum+=n;
    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
