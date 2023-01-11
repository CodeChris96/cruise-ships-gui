const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
  let itinerary;
  let dover;
  let manchester;

  beforeEach(() => {
    dover = jest.fn();
    manchester = jest.fn();
    itinerary = new Itinerary([dover, manchester]);
  });

  it("can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    expect(itinerary.ports).toEqual([dover, manchester]);
  });
});
