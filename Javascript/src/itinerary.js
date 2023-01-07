const { Port } = require("../src/port.js");

class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}

module.exports = { Itinerary };
