const { Port } = require("../src/port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port("port")).toBeInstanceOf(Object);
  });
  it("has a name", () => {
    const port = new Port("Dover");
    expect(port.port).toBe("Dover");
  });
});
