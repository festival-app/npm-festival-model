var PlacesCollection = function PlacesCollection(total, places) {
  this.total = total;
  this.places = places;
};

var PlacesCollectionBuilder = function PlacesCollectionBuilder() {
  this.total = null;
  this.places = null;

  var self = this;

  this.withTotal = function (total) {
    self.total = total;
    return self;
  };

  this.withPlaces = function (places) {
    self.places = places;
    return self;
  };

  this.build = function () {
    return new PlacesCollection(
      self.total,
      self.places
    );
  };

};

module.exports = exports = {
  PlacesCollection: PlacesCollection,
  PlacesCollectionBuilder: PlacesCollectionBuilder
};