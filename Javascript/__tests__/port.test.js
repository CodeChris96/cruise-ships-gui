const { Port } = require("../src/port.js");
const { Ship } = require("../src/ship.js");
const { Itinerary } = require("../src/itinerary.js");

describe("Port", () => {
  let itinerary;
  let dover;
  let manchester;
  let ship;
  beforeEach(() => {
    dover = new Port("Dover");
    manchester = new Port("Manchester");
    itinerary = new Itinerary([dover, manchester]);
    ship = new Ship("Titanic", itinerary);
    queenMary = new Ship("Queen Mary", itinerary);
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
