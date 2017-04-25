
let calculator = {
  firstNum: 0,
  secondNum: 0,

  read() {
    this.firstNum = parseFloat(prompt('First Number'));
    this.secondNum = parseFloat(prompt('Second Number'));
  },

  sum() {
    return (this.firstNum + this.secondNum);
  },

  mul() {
    return (this.firstNum * this.secondNum);
  },

};

calculator.read();

alert('Sum = ' + calculator.sum());

alert('Mul = ' + calculator.mul());
