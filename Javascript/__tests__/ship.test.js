/* globals describe it expect */
const { Ship } = require("../src/ship.js");
const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship("Titanic", itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship("Titanic", itinerary);

    expect(ship.currentPort).toBe(port);
  });
});

it("can set sail", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship("Titanic", itinerary);

  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
});

describe("Ship", () => {
  it("can dock at a different port", () => {
    const manchester = new Port("Manchester");
    const dover = new Port("Dover");
    const itinerary = new Itinerary([manchester, dover]);
    const ship = new Ship("Titanic", itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(dover);
  });
});
