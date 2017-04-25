function Bike(name, price) {
  this.name = name;
  this.price = price;

  this.tires = [new Tire(), new Tire()];
  this.frame = new Frame();
  this.rings = [3, 7];
  this.brakes = {
    front: true,
    back: true,
  };
}

function Frame(color, size, style) {
  this.color = (typeof color !== 'undefined') ? color : 'black';
  this.size = (typeof size !== 'undefined') ? size : 55;
  this.style = (typeof style !== 'undefined') ? style : 'street';
}

function Tire(diameter, type) {
  this.diameter = (typeof diameter !== 'undefined') ? diameter : 22;
  this.type = (typeof type !== 'undefined') ? type : 'street';
}

const myFrame = new Frame();
const myTire = new Tire();
const myBike = new Bike();

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire,
};
