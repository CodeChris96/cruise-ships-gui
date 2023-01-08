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
  const Dover = new Port("Dover");
  const Calais = new Port("Calais");
  const itinerary = new Itinerary([Dover, Calais]);
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

it("can't sail further than its itinerary", () => {
  const dover = new Port("Dover");
  const manchester = new Port("Manchester");
  const itinerary = new Itinerary([dover, manchester]);
  const ship = new Ship("Titanic", itinerary);

  ship.setSail();
  ship.dock();

  expect(() => ship.setSail()).toThrowError("End of itinerary reached");
});
