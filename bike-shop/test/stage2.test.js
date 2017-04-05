// Uses Jest for testing

const stage2 = require('../src/stage2-constructors.js')
const Bike   = stage2.Bike
const Frame  = stage2.Frame
const Tire   = stage2.Tire

describe('Frame', () => {
  test('is a constructor function', () => {
    expect(typeof Frame).toBe('function')
    expect(new Frame()).toBeInstanceOf(Frame)
  })

  test('has default color, size, and style', () => {
    const myFrame = new Frame()
    expect(myFrame.color).toBe('black')
    expect(myFrame.size).toBe(55)
    expect(myFrame.style).toBe('street')
  })

  test('can be initialized with color, size, and style', () => {
    const color = 'blue'
    const size = 60
    const style = 'mountain'

    const myFrame = new Frame(color, size, style)
    expect(myFrame.color).toBe(color)
    expect(myFrame.size).toBe(size)
    expect(myFrame.style).toBe(style)
  })
})

describe('Tire', () => {
  test('is a constructor function', () => {
    expect(typeof Tire).toBe('function')
    expect(new Tire()).toBeInstanceOf(Tire)
  })

  test('has default diameter and type', () => {
    const myTire = new Tire()
    expect(myTire.diameter).toBe(22)
    expect(myTire.type).toBe('street')
  })

  test('can be initialized with diameter and type', () => {
    const diameter = 24
    const type = 'racing'

    const myTire = new Tire(diameter, type)
    expect(myTire.diameter).toBe(diameter)
    expect(myTire.type).toBe(type)
  })
})

describe('Bike', () => {
  test('is a constructor function', () => {
    expect(typeof Bike).toBe('function')
    expect(new Bike()).toBeInstanceOf(Bike)
  })

  test('can be initialized with name and price', () => {
    const name = 'Speedster'
    const price = 250.00

    const myBike = new Bike(name, price)
    expect(myBike.name).toBe(name)
    expect(myBike.price).toBe(price)
  })

  test('has two tires', () => {
    const myBike = new Bike()
    expect(myBike.tires[0]).toBeInstanceOf(Tire)
    expect(myBike.tires[1]).toBeInstanceOf(Tire)
    expect(myBike.tires).toHaveLength(2)
  })

  test('uses default frame and tires', () => {
    const myBike = new Bike()
    expect(myBike.frame).toEqual(new Frame())
    expect(myBike.tires[0]).toEqual(new Tire())
    expect(myBike.tires[1]).toEqual(new Tire())
  })

  test('has 3 drive rings in front and 7 in back by default', () => {
    const myBike = new Bike()
    expect(myBike.rings).toEqual([3,7])
  })

  test('has both front and back brakes by default', () => {
    const myBike = new Bike()
    expect(myBike.brakes.front).toBe(true)
    expect(myBike.brakes.back).toBe(true)
  })

  test('custom frame and tires can be added', () => {
    const myBike = new Bike()
    const customFrame = new Frame('red', 58, 'racing')
    const customTires = [new Tire(24, 'racing'), new Tire(24, 'racing')]

    myBike.frame = customFrame
    myBike.tires = customTires

    expect(myBike.frame).toBe(customFrame)
    expect(myBike.tires).toBe(customTires)
  })
})
