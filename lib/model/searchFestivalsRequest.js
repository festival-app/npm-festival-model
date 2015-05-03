var SearchFestivalsRequest = function SearchFestivalsRequest(name, country, startAt, limit, offset) {
  this.name = name;
  this.country = country;
  this.startAt = startAt;
  this.limit = limit;
  this.offset = offset;
};

var SearchFestivalsRequestBuilder = function SearchFestivalsRequestBuilder() {
  this.name = null;
  this.country = null;
  this.startAt = null;
  this.limit = null;
  this.offset = null;

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

  this.withLimit = function (limit) {
    self.limit = limit;
    return self;
  };

  this.withOffset = function (offset) {
    self.offset = offset;
    return self;
  };

  this.build = function () {
    return new SearchFestivalsRequest(self.name, self.country, self.startAt, self.limit, self.offset);
  };

};

module.exports = exports = {
  SearchFestivalsRequest: SearchFestivalsRequest,
  SearchFestivalsRequestBuilder: SearchFestivalsRequestBuilder
};