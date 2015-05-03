var SearchFestivalsRequest = function SearchFestivalsRequest(name, country, startAt) {
  this.name = name;
  this.country = country;
  this.startAt = startAt;
};

var SearchFestivalsRequestBuilder = function SearchFestivalsRequestBuilder() {
  this.name = null;
  this.country = null;
  this.startAt = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
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
    return new SearchFestivalsRequest(self.name, self.country, self.startAt);
  };

};

module.exports = exports = {
  SearchFestivalsRequest: SearchFestivalsRequest,
  SearchFestivalsRequestBuilder: SearchFestivalsRequestBuilder
};