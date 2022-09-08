const findTheOldest = function(arrayOfPeople) {

    const currentYear = (new Date()).getFullYear();

    const x = arrayOfPeople.sort(function(persona1,persona2){
        
        if(!persona1.yearOfDeath){
            persona1.yearOfDeath = currentYear;
        }
        if(!persona2.yearOfDeath){
            persona2.yearOfDeath = currentYear;
        }

        let pOldness1 =persona1.yearOfDeath - persona1.yearOfBirth;
        let pOldness2 =persona2.yearOfDeath - persona2.yearOfBirth;

        return pOldness2-pOldness1;
    })

    return x[0];
    

};


// Do not edit below this line
module.exports = findTheOldest;
