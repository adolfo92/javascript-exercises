const leapYears = function(date) {

    //Divisibles entre 4

    //Si se divide exacto entre 100, tiene que dividirse exacto tambien entre 400

    if(date%4==0){

        if(date%100==0 && date%400!=0){
            return false
        }
    

    return true;}
    
    return false
};

// Do not edit below this line
module.exports = leapYears;
