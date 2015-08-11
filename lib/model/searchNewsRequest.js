var SearchNewsRequest = function SearchNewsRequest(country,
                                                   festival,
                                                   updatedAt,
                                                   limit,
                                                   offset) {
  this.country = country;
  this.festival = festival;
  this.updatedAt = updatedAt;
  this.limit = limit;
  this.offset = offset;
};

var SearchNewsRequestBuilder = function SearchNewsRequestBuilder() {
  this.country = null;
  this.festival = null;
  this.updatedAt = null;
  this.limit = null;
  this.offset = null;

  var self = this;

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.withFestival = function (festival) {
    self.festival = festival;
    return self;
  };

  this.withUpdatedAt = function (updatedAt) {
    self.updatedAt = updatedAt;
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
    return new SearchNewsRequest(
      self.country,
      self.festival,
      self.updatedAt,
      self.limit,
      self.offset
    );
  };
};

module.exports = exports = {
  SearchNewsRequest: SearchNewsRequest,
  SearchNewsRequestBuilder: SearchNewsRequestBuilder
};