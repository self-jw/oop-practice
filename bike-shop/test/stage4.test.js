// Uses Jest for testing

const stage4 = require('../src/stage4-inheritance.js')
const Bike           = stage4.Bike
const MountainBike   = stage4.MountainBike
const BMXBike        = stage4.BMXBike
const RacingBike     = stage4.RacingBike

describe('MountainBike', () => {
  it('inherits from Bike', () => {
    expect(MountainBike.prototype).toBeInstanceOf(Bike)
  })

  it('has a mountain bike frame and dirt tires by default', () => {
    const myMountainBike = new MountainBike()
    expect(myMountainBike.frame.style).toBe('mountain')
    expect(myMountainBike.tires[0].type).toBe('dirt')
    expect(myMountainBike.tires[1].type).toBe('dirt')
  })

  it('has a default shocks setting of 20% sag', () => {
    const myMountainBike = new MountainBike()
    const defaultSagSetting = 20
    expect(myMountainBike.shocks).toBe(defaultSagSetting)
  })

  it('has adjustable suspsention with #adjustShocks()', () => {
    const myMountainBike = new MountainBike()
    const newSagSetting = 30
    myMountainBike.adjustShocks(newSagSetting)
    expect(myMountainBike.shocks).toBe(newSagSetting)
  })
})

describe('BMXBike', () => {
  it('inherits from Bike', () => {
    expect(BMXBike.prototype).toBeInstanceOf(Bike)
  })

  it('has no front brakes by default', () => {
    const myBMXBike = new BMXBike()
    expect(myBMXBike.brakes.front).toBe(false)
    expect(myBMXBike.brakes.back).toBe(true)
  })

  it('has smaller (20") tires by default', () => {
    const myBMXBike = new BMXBike()
    expect(myBMXBike.tires[0].diameter).toBe(20)
    expect(myBMXBike.tires[1].diameter).toBe(20)
  })
})

describe('RacingBike', () => {
  it('inherits from Bike', () => {
    expect(RacingBike.prototype).toBeInstanceOf(Bike)
  })

  it('has a racing frame and road tires by default', () => {
    const myRacingBike = new RacingBike()
    expect(myRacingBike.frame.style).toBe('racing')
    expect(myRacingBike.tires[0].type).toBe('road')
    expect(myRacingBike.tires[1].type).toBe('road')
  })

  it('has 30 speeds by default (3 rings in front, 10 in back)', () => {
    const myRacingBike = new RacingBike()
    expect(myRacingBike.gearSpeeds()).toEqual(30)
    expect(myRacingBike.rings).toEqual([3,10])
  })
})

describe('Bike', () => {
  it('does not have methods unique to the subclasses', () => {
    const myBike = new Bike()
    expect(myBike.adjustShocks).toBeUndefined()
    expect(myBike.shocks).toBeUndefined()
  })
})
