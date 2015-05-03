var Image = function Image(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
};

var ImageBuilder = function ImageBuilder() {
  this.small = null;
  this.medium = null;
  this.large = null;

  var self = this;

  this.withSmall = function (small) {
    self.small = small;
    return self;
  };

  this.withMedium = function (medium) {
    self.medium = medium;
    return self;
  };

  this.withLarge = function (large) {
    self.large = large;
    return self;
  };

  this.build = function () {
    return new Image(
      self.small,
      self.medium,
      self.large
    );
  };

};

module.exports = exports = {
  Image: Image,
  ImageBuilder: ImageBuilder
};