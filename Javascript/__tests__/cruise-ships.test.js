/* globals describe it expect */
const Ship = require("../src/cruise-ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship("Titanic", "Dover")).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    expect(new Ship("Titanic", "Dover").startPort).toBe("Dover");
  });
});
