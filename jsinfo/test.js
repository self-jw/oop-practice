class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;

    // alert(`${this.name} runs with speed ${this.speed}.`);
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;

    // alert(`${this.name} stopped.`);
    console.log(`${this.name} stopped in Animal class!`);
  }

}

class Rabbit extends Animal {
  hide() {
    // alert(`${this.name} hides!`);
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    console.log(`${this.name} is in Rabbit class!`);
    this.hide(); // and then hide
  }
}

class Dog extends Rabbit{
  jumps() {
    // alert(`${this.name} jumps!`);
    console.log(`${this.name} jumps!`);
  }

  stop() {
    // super.stop(); // call parent stop
    super.stop(); // call parent stop
    this.jumps(); // and then hide
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!

let dog = new Dog('Brown Dog');

dog.run(10); // White Rabbit runs with speed 5.
dog.stop(); // White Rabbit stopped. White rabbit hides!
