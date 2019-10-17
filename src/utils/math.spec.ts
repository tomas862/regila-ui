import {add} from "./math";

describe('math', () => {
  it('adds two numbers', () => {
    expect(5).toEqual(add(2, 3))
  })

  it('adds two floating point numbers', () => {
    expect(5.5).toEqual(add(2,3.5))
  })
});
