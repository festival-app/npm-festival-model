var chai = require('chai');
var should = chai.should();
var searchFestivalsRequest = require('../../lib/model/searchFestivalsRequest');

describe('searchFestivalsRequest model test', function () {

  var name = 'name';
  var country = 'PL';
  var startAt = '12-01-1988';
  var limit = 11;
  var offset = 1;

  it('should create model', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequest(
      name,
      country,
      startAt,
      limit,
      offset
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequestBuilder()
      .withName(name)
      .withCountry(country)
      .withStartAt(startAt)
      .withLimit(limit)
      .withOffset(offset)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

});