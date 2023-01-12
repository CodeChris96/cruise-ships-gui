/* globals describe it expect */
const { Ship } = require("../src/ship.js");

describe("Ship", () => {
  let itinerary;
  let dover;
  let manchester;
  let ship;

  beforeEach(() => {
    dover = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      port: "dover",
      ships: [],
    };
    manchester = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      port: "manchester",
      ships: [],
    };
    itinerary = {
      ports: [dover, manchester],
    };
    ship = new Ship("Titanic", itinerary);
  });

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(dover);
  });

  it("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
    expect(dover.ships).not.toContain([ship]);
  });

  it("can dock at a different port", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(manchester);
    expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
  });

  it("can't sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });

  it("gets added to port on instantiation", () => {
    expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
  });
});
