/* globals describe it expect */
const { Ship } = require("../src/ship.js");
const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

const dover = new Port("Dover");
const manchester = new Port("Manchester");
const itinerary = new Itinerary([dover, manchester]);
const ship = new Ship("Titanic", itinerary);

describe("Ship", () => {
  beforeEach(() => {
    dover.resetShip();
    manchester.resetShip();
    ship.currentPort = itinerary.ports[0];
  });

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(dover);
  });
});

it("can set sail", () => {
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
  expect(ship.previousPort).toBe(dover);
  expect(dover.ships).not.toContain(ship);
});

it("can dock at a different port", () => {
  // ship.setSail();
  // ship.dock();
  // expect(ship.currentPort).toBe(manchester);
  // expect(manchester.ships).toContain(ship);

  const Titanic = new Ship("Titanic", itinerary);
  Titanic.setSail();
  Titanic.dock();
  expect(Titanic.currentPort).toBe(manchester);
  expect(manchester.ships).toContain(Titanic);
});

it("can't sail further than its itinerary", () => {
  ship.setSail();
  ship.dock();
  ship.setSail();
  ship.dock();
  expect(() => ship.setSail()).toThrowError("End of itinerary reached");
});

it("gets added to port on instantiation", () => {
  expect(dover.ships).toContain(ship);
});
