var PlaceRequest = function PlaceRequest(name, parent, openingTimes, coordinates) {
  this.name = name;
  this.parent = parent;
  this.openingTimes = openingTimes;
  this.coordinates = coordinates;
};

var PlaceRequestBuilder = function PlaceRequestBuilder() {
  this.name = null;
  this.parent = null;
  this.openingTimes = null;
  this.coordinates = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withParent = function withParent(parent) {
    self.parent = parent;
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
    return new PlaceRequest(
     self.name, 
     self.parent, 
     self.openingTimes, 
     self.coordinates
    );
  };

};

module.exports = exports = {
  PlaceRequest: PlaceRequest,
  PlaceRequestBuilder: PlaceRequestBuilder
};
