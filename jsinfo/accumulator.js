
// Add user entered numbers starting with 1.
function Accumulator(startValue) {

  this.value = startValue;

  this.read = function () {
    this.value += parseFloat(prompt('Enter Number'));
  };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
