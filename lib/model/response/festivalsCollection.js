var FestivalsCollection = function FestivalsCollection(total, festivals) {
  this.total = total;
  this.festivals = festivals;
};

var FestivalsCollectionBuilder = function FestivalsCollectionBuilder() {
  this.total = null;
  this.festivals = null;

  var self = this;

  this.withTotal = function (total) {
    self.total = total;
    return self;
  };

  this.withFestivals = function (festivals) {
    self.festivals = festivals;
    return self;
  };

  this.build = function () {
    return new FestivalsCollection(
      self.total,
      self.festivals
    );
  };

};

module.exports = exports = {
  FestivalsCollection: FestivalsCollection,
  FestivalsCollectionBuilder: FestivalsCollectionBuilder
};