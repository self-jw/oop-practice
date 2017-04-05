function Bike(name, price) {
  const DEFAULT_RINGS = [3, 7]
  const DEFAULT_BRAKES = { front: true, back: true }

  this.name = name
  this.price = price
  this.frame = new Frame()
  this.tires = [new Tire(), new Tire()]
  this.rings = DEFAULT_RINGS
  this.brakes = DEFAULT_BRAKES
}

function Frame(color='black', size=55, style='street') {
  this.color = color
  this.size = size
  this.style = style
}

function Tire(diameter=22, type='street') {
  this.diameter = diameter
  this.type = type
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
