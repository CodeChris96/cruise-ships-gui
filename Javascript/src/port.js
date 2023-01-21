  class Port {
    constructor(portName) {

      this.name = portName;
      this.ships = [];
    }

    addShip(Ship) {
      this.ships.push(Ship);
    }

    removeShip(Ship) {
      const shipIndex = this.ships.indexOf(Ship);
      this.ships.splice(shipIndex, 1);
    }
  }
(function exportPort() {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
