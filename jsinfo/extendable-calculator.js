
function Calculator() {

  // key = operator , values = (a, b)
  let methods = {};

  // Add operator and numbers to the methods object.
  this.addMethod = function (operator, func) {
    methods[operator] = func;
  };

  // Print methods to verify if they were populated.
  this.printMethod = function () {
    for (var key in methods) {
      console.log(key + '  ' + methods[key]);
    }
  };

  // Split the string and return the method (if it exists).
  this.calculate = function (str) {
    let splitStr = str.split(' ');

    // Idx1 === operator
    op = splitStr[1];
    firstNum = parseFloat(splitStr[0]);
    secondNum = parseFloat(splitStr[2]);
    console.log(op + ' ' + firstNum + ' ' + secondNum);
    return methods[op](firstNum, secondNum);
  };

}

// let calc = new Calculator();
// alert(calc.calculate('3 + 7')); // 10

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
powerCalc.printMethod();
let result = powerCalc.calculate('2 ** 3');
alert(result); // 8
