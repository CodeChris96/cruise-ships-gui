const { Ship } = require("../src/ship.js");
const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
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
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    expect(itinerary.ports).toEqual([dover, manchester]);
  });
});
