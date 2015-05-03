var FestivalsCollection = function FestivalsCollection(count, festivals) {
  this.count = count;
  this.festivals = festivals;
};

var FestivalsCollectionBuilder = function FestivalsCollectionBuilder() {
  this.count = null;
  this.festivals = null;

  var self = this;

  this.withCount = function (count) {
    self.count = count;
    return self;
  };

  this.withFestivals = function (festivals) {
    self.festivals = festivals;
    return self;
  };

  this.build = function () {
    return new FestivalsCollection(
      self.count,
      self.festivals
    );
  };

};

module.exports = exports = {
  FestivalsCollection: FestivalsCollection,
  FestivalsCollectionBuilder: FestivalsCollectionBuilder
};