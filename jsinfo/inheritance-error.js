
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

// Error here below. Rabbit overwirtes animal .
// Rabbit.prototype = Animal.prototype;

// Setup the inheritance chain to keep the two separate.
Rabbit.prototype.__proto__ = Animal.prototype; // (*)

Rabbit.prototype.walk = function () {
  alert(this.name + ' bounces!');
};
