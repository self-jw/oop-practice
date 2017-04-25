// Calculator object with three functions.
function Calculator() {

  // Scope of variables within funciton only.
  // Explicity defined instead of using 'this' for clarity.
  var firstNum  = 0;
  var secondNum = 0;

  // Prompt the user for two numbers.
  this.read = function () {
    firstNum = parseFloat(prompt('First Number'));
    secondNum = parseFloat(prompt('Second Number'));
  };

  // Sum the two numbers.
  this.sum = function () {
    return firstNum + secondNum;
  };

  // Multiply the two numbers.
  this.mul = function () {
    return firstNum * secondNum;
  };

}

// Instantiate object.
let calculator = new Calculator();

// Read from prompt.
calculator.read();

// Display summattion and multiplication.
alert('Sum = ' + calculator.sum());
alert('Mul = ' + calculator.mul());
