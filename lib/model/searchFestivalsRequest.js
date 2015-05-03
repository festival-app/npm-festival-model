var SearchFestivalsRequest = function SearchFestivalsRequest(tags, country, startAt) {
  this.tags = tags;
  this.country = country;
  this.startAt = startAt;
};

var SearchFestivalsRequestBuilder = function SearchFestivalsRequestBuilder() {
  this.tags = null;
  this.country = null;
  this.startAt = null;
  this.country = null;

  var self = this;

  this.withTags = function (tags) {
    self.tags = tags;
    return self;
  };

  this.withStartAt = function (startAt) {
    self.startAt = startAt;
    return self;
  };

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.build = function () {
    return new SearchFestivalsRequest(self.tags, self.country, self.startAt);
  };

};

module.exports = exports = {
  SearchFestivalsRequest: SearchFestivalsRequest,
  SearchFestivalsRequestBuilder: SearchFestivalsRequestBuilder
};