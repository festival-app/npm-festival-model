var Place = function Place(id, parent, name, openingTimes) {
  this.id = id;
  this.parent = parent;
  this.name = name;
  this.openingTimes = openingTimes;
};

var PlaceBuilder = function PlaceBuilder() {
  this.id = null;
  this.parent = null;
  this.name = null;
  this.openingTimes = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
    return self;
  };

  this.withParent = function (parent) {
    self.parent = parent;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withOpeningTimes = function (openingTimes) {
    self.openingTimes = openingTimes;
    return self;
  };

  this.build = function () {
    return new Place(
      self.id,
      self.parent,
      self.name,
      self.openingTimes
    );
  };

};

module.exports = exports = {
  Place: Place,
  PlaceBuilder: PlaceBuilder
};