var FestivalResponse = function FestivalResponse(id, name, description, type, tags, mainImage, duration, locations, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.type = type;
  this.tags = tags;
  this.mainImage = mainImage;
  this.duration = duration;
  this.locations = locations;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var FestivalResponseBuilder = function FestivalResponseBuilder() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.type = null;
  this.tags = null;
  this.mainImage = null;
  this.duration = null;
  this.locations = null;
  this.createdAt = null;
  this.updatedAt = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withDescription = function withDescription(description) {
    self.description = description;
    return self;
  };

  this.withType = function withType(type) {
    self.type = type;
    return self;
  };

  this.withTags = function withTags(tags) {
    self.tags = tags;
    return self;
  };

  this.withMainImage = function withMainImage(mainImage) {
    self.mainImage = mainImage;
    return self;
  };

  this.withDuration = function withDuration(duration) {
    self.duration = duration;
    return self;
  };

  this.withLocations = function withLocations(locations) {
    self.locations = locations;
    return self;
  };

  this.withCreatedAt = function withCreatedAt(createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function withUpdatedAt(updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };


  this.build = function build() {
    return new FestivalResponse(
     self.id, 
     self.name, 
     self.description, 
     self.type, 
     self.tags, 
     self.mainImage, 
     self.duration, 
     self.locations, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = exports = {
  FestivalResponse: FestivalResponse,
  FestivalResponseBuilder: FestivalResponseBuilder
};
