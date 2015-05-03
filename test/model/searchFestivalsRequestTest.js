var chai = require('chai');
var should = chai.should();
var searchFestivalsRequest = require('../../lib/model/searchFestivalsRequest');

describe('searchFestivalsRequest model test', function () {

  var name = 'name';
  var country = 'PL';
  var startAt = '12-01-1988';

  it('should create model', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequest(
      name,
      country,
      startAt
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequestBuilder()
      .withName(name)
      .withCountry(country)
      .withStartAt(startAt)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.country.should.be.equal(country);
    model.startAt.should.be.equal(startAt);

    done();
  });

});