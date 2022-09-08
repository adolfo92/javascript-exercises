const palindromes = function (texto) {

    const textoLimpio = texto.replace(/[!,. ]/g,'').toLowerCase() //Quitame los espacios, las comas y los signos de admiracion luego ponlo todo en minuscula

    const textoReverso = textoLimpio.split('').reverse().join('');

    if(textoLimpio===textoReverso) return true;

    return false;

};

// Do not edit below this line
module.exports = palindromes;
