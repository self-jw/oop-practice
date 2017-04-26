class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    // Use super to set name in Animal class.
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White Rabbit'); // Error: this is not defined
alert(rabbit.name);
