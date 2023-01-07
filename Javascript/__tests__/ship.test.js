/* globals describe it expect */
const { Ship } = require("../src/ship.js");
const { Port } = require("../src/port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship("Titanic", Port)).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    expect(new Ship("Titanic", Port).currentPort).toBe(Port);
  });
});

describe("Ship", () => {
  it("can set sail", () => {
    const ship = new Ship("Titanic", Port);
    ship.setSail("Milan");

    expect(ship.currentPort).toBeFalsy();
  });
});

describe("Ship", () => {
  xit("can set sail and add destination to destinations array", () => {
    const ship = new Ship("Titanic", "Southampton");
    ship.setSail(Port);
    expect(ship.currentPort).toBe(Port);
  });
});

describe("Ship", () => {
  it("can dock at different ports", () => {
    const ship = new Ship("Titanic", "Southampton");
    const calais = new Port("Calais");
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
