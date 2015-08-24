var chai = require('chai');
var should = chai.should();
var searchNewsRequest = require('../../lib/model/searchNewsRequest');

describe('searchNewsRequest model test', function () {

  var name = 'name';
  var country = 'country';
  var festival = 'festival';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;
  var sort = 'sort';

  it('should create model', function (done) {

    var model = new searchNewsRequest.SearchNewsRequest(
      name,
      country,
      festival,
      updatedAt,
      limit,
      offset,
      sort
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.festival.should.be.equal(festival);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchNewsRequest.SearchNewsRequestBuilder()
      .withName(name)
      .withCountry(country)
      .withFestival(festival)
      .withUpdatedAt(updatedAt)
      .withLimit(limit)
      .withOffset(offset)
      .withSort(sort)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.festival.should.be.equal(festival);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

});