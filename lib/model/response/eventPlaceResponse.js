var EventPlaceResponse = function EventPlaceResponse(id, name, breadcrumbs, openingTimes, cordinates) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
  this.openingTimes = openingTimes;
  this.cordinates = cordinates;
};

var EventPlaceResponseBuilder = function EventPlaceResponseBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.openingTimes = null;
  this.cordinates = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function withBreadcrumbs(breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };

  this.withOpeningTimes = function withOpeningTimes(openingTimes) {
    self.openingTimes = openingTimes;
    return self;
  };

  this.withCordinates = function withCordinates(cordinates) {
    self.cordinates = cordinates;
    return self;
  };


  this.build = function build() {
    return new EventPlaceResponse(
     self.id, 
     self.name, 
     self.breadcrumbs, 
     self.openingTimes, 
     self.cordinates
    );
  };

};

module.exports = exports = {
  EventPlaceResponse: EventPlaceResponse,
  EventPlaceResponseBuilder: EventPlaceResponseBuilder
};
