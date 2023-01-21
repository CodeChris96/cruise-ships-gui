const Port = require("../src/port.js");

describe("Port", () => {
  let dover;
  let manchester;
  let ship;
  let queenMary;
  beforeEach(() => {
    dover = new Port("Dover");
    manchester = new Port("Manchester");
    ship = jest.fn();
    queenMary = jest.fn();
  });

  it("can be instantiated", () => {
    expect(dover).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    expect(dover.port).toBe("Dover");
  });

  it("can add a ship", () => {
    dover.addShip(ship);
    expect(dover.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    dover.addShip(ship);
    dover.addShip(queenMary);
    dover.removeShip(ship);

    expect(dover.ships).not.toContain([ship]);
  });
});
