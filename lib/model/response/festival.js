var Festival = function Festival(id, name, description, tags, createdAt, updatedAt, duration, location) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.tags = tags;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.duration = duration;
  this.location = location;
};

var FestivalBuilder = function FestivalBuilder() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.tags = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.duration = null;
  this.location = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withDescription = function (description) {
    self.description = description;
    return self;
  };

  this.withTags = function (tags) {
    self.tags = tags;
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

  this.withDuration = function (duration) {
    self.duration = duration;
    return self;
  };

  this.withLocation = function (location) {
    self.location = location;
    return self;
  };

  this.build = function () {
    return new Festival(
      self.id,
      self.name,
      self.description,
      self.tags,
      self.createdAt,
      self.updatedAt,
      self.duration,
      self.location
    );
  };

};

module.exports = exports = {
  Festival: Festival,
  FestivalBuilder: FestivalBuilder
};