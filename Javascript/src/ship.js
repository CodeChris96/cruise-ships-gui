const { Port } = require("../src/port.js");
const { Itinerary } = require("../src/itinerary.js");

class Ship {
  constructor(boatName, itinerary) {
    this.name = boatName;
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.destinations = [];
  }
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock(Port) {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
  }
}

module.exports = { Ship };
