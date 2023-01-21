const Controller = require("../src/controller.js");

describe("Controller", () => {
  let controller;
  let window;
  beforeEach(() => {
    controller = new Controller();
    window = jest.fn();
  });

  xit("can be instantiated", () => {
    expect(controller).toBeInstanceOf(Object);
  });

  xit("can initialise the sea", () => {
    expect(controller.initialiseSea).toBeInstanceOf(Function);
  });
});
