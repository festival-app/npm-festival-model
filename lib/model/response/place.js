var Place = function Place(id, name, openingTimes, createdAt, updatedAt, parent) {
  this.id = id;
  this.name = name;
  this.openingTimes = openingTimes;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.parent = parent;
};

var PlaceBuilder = function PlaceBuilder() {
  this.id = null;
  this.name = null;
  this.openingTimes = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.parent = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
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

  this.withCreatedAt = function (createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function (updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };

  this.withParent = function (parent) {
    self.parent = parent;
    return self;
  };

  this.build = function () {
    return new Place(
      self.id,
      self.name,
      self.openingTimes,
      self.createdAt,
      self.updatedAt,
      self.parent
    );
  };

};

module.exports = exports = {
  Place: Place,
  PlaceBuilder: PlaceBuilder
};