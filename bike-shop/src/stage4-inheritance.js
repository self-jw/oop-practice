class Frame {
  constructor (color, size, style) {
    this.color = color;
    this.size = size;
    this.style = style;
  }

}

class Tire {
  // constructor (diameter, type) {
  //   this.diameter = diameter ? diameter : 22;
  //   this.type = type ? type : 'dirt';
  // }
  constructor (diameter, type) {
    this.type = type;
    this.diameter = diameter;
  }
}

class Bike {
  constructor () {
    this.tires = [new Tire(), new Tire()];
    this.frame = new Frame();
  }
}

class MountainBike extends Bike {
  constructor () {
    super();
    this.frame.style = 'mountain';
    this.tires[0].type = 'dirt';
    this.tires[1].type = 'dirt';
    this.shocks = 20;
  }

  adjustShocks (x) {
    this.shocks = x;
  }

}

class BMXBike extends Bike {
  constructor () {
    super();
    this.brakes = {
      front: false,
      back: true,
    };
    this.tires[0].diameter = 20;
    this.tires[1].diameter = 20;
  }
}

class RacingBike extends Bike {
  constructor () {
    super();
    this.frame.style = 'racing';
    this.tires[0].type = 'road';
    this.tires[1].type = 'road';
    this.rings = [3, 10];
  }

  gearSpeeds() {
    return (parseInt(this.rings[0]) * parseInt(this.rings[1]));
  }
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire,

  // you'll need to export new classes here
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,

};
