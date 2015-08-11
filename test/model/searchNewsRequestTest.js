var chai = require('chai');
var should = chai.should();
var searchNewsRequest = require('../../lib/model/searchNewsRequest');

describe('searchNewsRequest model test', function () {

  var country = 'country';
  var festival = 'festival';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;

  it('should create model', function (done) {

    var model = new searchNewsRequest.SearchNewsRequest(
      country,
      festival,
      updatedAt,
      limit,
      offset
    );

    should.exist(model);
    model.country.should.be.equal(country);
    model.festival.should.be.equal(festival);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchNewsRequest.SearchNewsRequestBuilder()
      .withCountry(country)
      .withFestival(festival)
      .withUpdatedAt(updatedAt)
      .withLimit(limit)
      .withOffset(offset)
      .build();

    should.exist(model);
    model.country.should.be.equal(country);
    model.festival.should.be.equal(festival);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

});