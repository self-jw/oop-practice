// Uses Jest for testing

const bike = require('../src/stage1-literals.js')

test('bike has a name "Roadster"', () => {
  expect(bike).toHaveProperty('name')
  expect(bike).toHaveProperty('name', 'Roadster')
})

test('bike has a price of 199.99', () => {
  expect(bike).toHaveProperty('price')
  expect(bike).toHaveProperty('price', 199.99)
})

test('bike has a frame, which is itself an object', () => {
  expect(bike).toHaveProperty('frame')
  expect(typeof bike.frame).toBe('object')
})

test('frame has a height of 55cm, is the color blue, and is a "cruiser" style', () => {
  const expectedFrame = {
    height: 55,
    color: 'blue',
    style: 'cruiser'
  }
  expect(bike.frame).toEqual(expectedFrame)
})

test('bike has brakes', () => {
  expect(bike).toHaveProperty('brakes')
  expect(typeof bike.brakes).toBe('object')
})

test('there is a back brake, but no front brake', () => {
  const expectedBrakes = {
    front: false,
    back: true
  }
  expect(bike.brakes).toEqual(expectedBrakes)
})

test('bike has tires', () => {
  expect(bike).toHaveProperty('tires')
  expect(typeof bike.tires).toBe('object')
})

test('tires have a diameter of 22in and are a "fat" type', () => {
  const expectedTires = {
    diameter: 22,
    type: 'fat'
  }
  expect(bike.tires).toEqual(expectedTires)
})

test('bike has 2 drive rings in the front and 5 in back', () => {
  expect(bike).toHaveProperty('rings')
  expect(bike).toHaveProperty('rings', [2, 5])
})
