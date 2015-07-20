var LocationResponse = function LocationResponse(name, state, country, street, zip, openingTimes, coordinates) {
  this.name = name;
  this.state = state;
  this.country = country;
  this.street = street;
  this.zip = zip;
  this.openingTimes = openingTimes;
  this.coordinates = coordinates;
};

var LocationResponseBuilder = function LocationResponseBuilder() {
  this.name = null;
  this.state = null;
  this.country = null;
  this.street = null;
  this.zip = null;
  this.openingTimes = null;
  this.coordinates = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withState = function withState(state) {
    self.state = state;
    return self;
  };

  this.withCountry = function withCountry(country) {
    self.country = country;
    return self;
  };

  this.withStreet = function withStreet(street) {
    self.street = street;
    return self;
  };

  this.withZip = function withZip(zip) {
    self.zip = zip;
    return self;
  };

  this.withOpeningTimes = function withOpeningTimes(openingTimes) {
    self.openingTimes = openingTimes;
    return self;
  };

  this.withCoordinates = function withCoordinates(coordinates) {
    self.coordinates = coordinates;
    return self;
  };


  this.build = function build() {
    return new LocationResponse(
     self.name, 
     self.state, 
     self.country, 
     self.street, 
     self.zip, 
     self.openingTimes, 
     self.coordinates
    );
  };

};

module.exports = exports = {
  LocationResponse: LocationResponse,
  LocationResponseBuilder: LocationResponseBuilder
};
