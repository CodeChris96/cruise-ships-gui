const { Ship } = require("../src/ship.js");

class Port {
  constructor(portName) {
    this.port = portName;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip(ship) {
    const shipIndex = this.ships.indexOf(ship);
    this.ships.splice(shipIndex, 1);
  }

  resetShip() {
    this.ships = [];
  }

  getShip(index) {}
}

module.exports = { Port };
