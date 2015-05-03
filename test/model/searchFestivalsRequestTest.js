var chai = require('chai');
var should = chai.should();
var searchFestivalsRequest = require('../../lib/model/searchFestivalsRequest');

describe('searchFestivalsRequest model test', function () {

  var tags = 'AAS 12345';
  var country = 'PL';
  var startAt = '12-01-1988';

  it('should create model', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequest(
      tags,
      country,
      startAt
    );

    should.exist(model);
    model.tags.should.be.equal(tags);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequestBuilder()
      .withTags(tags)
      .withCountry(country)
      .withStartAt(startAt)
      .build();

    should.exist(model);
    model.tags.should.be.equal(tags);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);

    done();
  });

});