const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arrayDeSuma) {

  const resultado = arrayDeSuma.reduce((acumulador,item)=> acumulador += item ,0);

  return resultado;
  	
};

const multiply = function(arrayDeMult) {

  const resultado = arrayDeMult.reduce((acumulador,item)=> acumulador *= item ,1);

  return resultado;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
