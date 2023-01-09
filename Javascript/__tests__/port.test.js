const { Port } = require("../src/port.js");
const { Ship } = require("../src/ship.js");
const { Itinerary } = require("../src/itinerary.js");

const dover = new Port("Dover");
const manchester = new Port("Manchester");
const itinerary = new Itinerary([dover, manchester]);
const Titanic = new Ship("Titanic", itinerary);
const queenMary = new Ship("Queen Mary", itinerary);

describe("Port", () => {
  beforeEach(() => {
    dover.resetShip();
    manchester.resetShip();
  });

  it("can be instantiated", () => {
    expect(new Port("calais")).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    expect(dover.port).toBe("Dover");
  });
});

it("can add a ship", () => {
  dover.addShip(Titanic);
  expect(dover.ships).toContain(Titanic);
});

it("can remove a ship", () => {
  dover.addShip(Titanic);
  dover.addShip(queenMary);
  dover.removeShip(Titanic);

  expect(dover.ships).not.toContain([Titanic]);
});
