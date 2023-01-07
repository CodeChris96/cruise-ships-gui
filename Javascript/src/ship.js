const { Port } = require("../src/port.js");

class Ship {
  constructor(boatName, Port) {
    this.name = boatName;
    this.currentPort = Port;
    this.destinations = [];
  }
  setSail() {
    this.currentPort = null;
  }

  dock(Port) {
    this.currentPort = Port;
  }
}

module.exports = { Ship };
