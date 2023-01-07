const { Ship } = require("../src/ship.js");
const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});

describe("Itinerary", () => {
  it("can have ports", () => {
    const Dover = new Port("Dover");
    const Manchester = new Port("Manchester");

    const itinerary = new Itinerary([Dover, Manchester]);
    expect(itinerary.ports).toEqual([Dover, Manchester]);
  });
});
