const ftoc = function(Fah) {

  //f->c : C = (F - 32)*(5/9)

  let celsius = (Fah -32)*(5/9);

  celsius = parseFloat(celsius.toFixed(1));


  return celsius

};

const ctof = function(Cel) {

  //c->f : F = C*(9/5) + 32

  let farenheit = Cel*(9/5) + 32

  farenheit = parseFloat(farenheit.toFixed(1))

  return farenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
