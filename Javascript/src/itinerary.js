class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}


(function exportItinerary() {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
}());
