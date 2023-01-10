const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

class Ship {
  constructor(boatName, itinerary) {
    this.name = boatName;
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];

    this.currentPort.addShip(this);
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock(port) {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  }
}

module.exports = { Ship };
