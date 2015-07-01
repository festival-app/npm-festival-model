var EventPlace = function EventPlace(id, name, breadcrumbs, openingTimes) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
  this.openingTimes = openingTimes;
};

var EventPlaceBuilder = function EventPlaceBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.openingTimes = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function (breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };

  this.withOpeningTimes = function (openingTimes) {
    self.openingTimes = openingTimes;
    return self;
  };

  this.build = function () {
    return new EventPlace(
      self.id,
      self.name,
      self.breadcrumbs,
      self.openingTimes
    );
  };

};

module.exports = exports = {
  EventPlace: EventPlace,
  EventPlaceBuilder: EventPlaceBuilder
};