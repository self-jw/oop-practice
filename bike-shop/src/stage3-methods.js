function Bike(name, price) {
  const DEFAULT_RINGS = [3, 7]
  const DEFAULT_BRAKES = { front: true, back: true }

  this.name = name
  this.price = price
  this.frame = new Frame()
  this.tires = [new Tire(), new Tire()]
  this.rings = DEFAULT_RINGS
  this.brakes = DEFAULT_BRAKES

  this._moving = false
}

Bike.prototype.gearSpeeds = function() {
  return this.rings[0] * this.rings[1]
}

Bike.prototype.pedal = function() {
  if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
    throw Error("Can't pedal with a flat tire")
  }

  this._moving = true
}

Bike.prototype.brake = function() {
  this._moving = false
}

Bike.prototype.isMoving = function() {
  return this._moving
}

function Frame(color='black', size=55, style='street') {
  this.color = color
  this.size = size
  this.style = style
}

function Tire(diameter=22, type='street') {
  this.diameter = diameter
  this.type = type
  this._flat = false
}

Tire.prototype.isFlat = function() {
  return this._flat
}

Tire.prototype.puncture = function() {
  this._flat = true
}

Tire.prototype.repair = function() {
  this._flat = false
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
