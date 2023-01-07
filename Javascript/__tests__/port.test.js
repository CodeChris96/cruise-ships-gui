const { Port } = require("../src/port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port("port")).toBeInstanceOf(Object);
  });
  it("has a name", () => {
    expect(new Port("port").port).toBe("port");
  });
});
