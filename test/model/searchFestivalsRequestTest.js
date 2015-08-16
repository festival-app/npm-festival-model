var chai = require('chai');
var should = chai.should();
var searchFestivalsRequest = require('../../lib/model/searchFestivalsRequest');

describe('searchFestivalsRequest model test', function () {

  var name = 'name';
  var country = 'PL';
  var startAt = '12-01-1988';
  var finishAt = '13-01-1988';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;
  var sort = 'sort';

  it('should create model', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequest(
      name,
      country,
      startAt,
      finishAt,
      updatedAt,
      limit,
      offset,
      sort
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequestBuilder()
      .withName(name)
      .withCountry(country)
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .withUpdatedAt(updatedAt)
      .withLimit(limit)
      .withOffset(offset)
      .withSort(sort)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

});