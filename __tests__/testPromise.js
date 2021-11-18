import { Promise } from '../index.js'

describe("For all promises", () => {
  it("Should return a promise", () => {
    expect(typeof Promise).toBe('function')
  })
})
