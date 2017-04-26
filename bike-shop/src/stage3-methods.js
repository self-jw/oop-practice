function Bike() {
  this._isMoving = false;

  // Add two tires to bike.
  this.tires = [new Tire(), new Tire()];

  // Gear rings.
  this.rings = [3, 7];
}

Bike.prototype.isMoving = function () {
  return this._isMoving;
};

Bike.prototype.brake = function () {
  this._isMoving = false;
};

Bike.prototype.gearSpeeds = function () {
  return (parseInt(this.rings[0]) * parseInt(this.rings[1]));
};

Bike.prototype.pedal = function () {
  this._isMoving = true;
  if (this.tires[0]._isFlat || this.tires[1]._isFlat) {
    throw("Can't pedal with a flat tire");
  }
};

function Frame() {
  // your code here
}

function Tire() {
  this._isFlat = false;
}

Tire.prototype.isFlat = function () {
  return this._isFlat;
};

Tire.prototype.puncture = function () {
  this._isFlat = true;
};

Tire.prototype.repair = function () {
  this._isFlat = false;
};

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire,
};
