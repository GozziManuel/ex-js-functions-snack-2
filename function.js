// snack 1
function NumberSum(numero1, numero2) {
  console.log(numero1 * numero2);
}

NumberSum(3, 2);

const NumberSumAnonima = function (numero1, numero2) {
  console.log(numero1 * numero2);
};

NumberSumAnonima(3, 3);

const NumberSumArrow = (numero1, numero2) => console.log(numero1 * numero2);

NumberSumArrow(12, 5);
