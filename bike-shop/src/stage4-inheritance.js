class Frame {
  constructor(color='black', size=55, style='street') {
    this.color = color
    this.size = size
    this.style = style
  }
}

class Tire {
  constructor(diameter=22, type='street') {
    this.diameter = diameter
    this.type = type
    this._flat = false
  }

  isFlat() { return this._flat }
  puncture() { this._flat = true }
  repair() { this._flat = false }
}

class DirtTire extends Tire {
  constructor(diameter) {
    super(diameter, 'dirt')
  }
}

class RoadTire extends Tire {
  constructor(diameter) {
    super(diameter, 'road')
  }
}

class Bike {
  constructor(name, price) {
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

  gearSpeeds() { return this.rings[0] * this.rings[1] }

  pedal() {
    if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
      throw Error("Can't pedal with a flat tire")
    }

    this._moving = true
  }

  brake() { this._moving = false }
  isMoving() { return this._moving }
}

class MountainBike extends Bike {
  constructor(...args) {
    super(...args)

    this.frame.style = 'mountain'
    this.tires = [new DirtTire(), new DirtTire()]
    this._shocks = 20
  }

  get shocks() { return this._shocks }
  adjustShocks(newSetting) { this._shocks = newSetting }
}

class BMXBike extends Bike {
  constructor(...args) {
    super(...args)

    this.brakes = { front: false, back: true }
    this.tires = [new Tire(20), new Tire(20)]
  }
}

class RacingBike extends Bike {
  constructor(...args) {
    super(...args)

    this.frame.style = 'racing'
    this.tires = [new RoadTire(), new RoadTire()]
    this.rings = [3, 10]
  }
}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
}
