var chai = require('chai');
var should = chai.should();
var searchFestivalsRequest = require('../../lib/model/searchFestivalsRequest');

describe('searchFestivalsRequest model test', function () {

  var name = 'name';
  var description = 'description';
  var type = 'type';
  var dateFrom = 'dateFrom';
  var dateTo = 'dateTo';
  var locationCountry = 'locationCountry';
  var locationName = 'locationName';
  var locationCity = 'locationCity';
  var locationState = 'locationState';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;
  var sort = 'sort';

  it('should create model', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequest(
      name,
      description,
      type,
      dateFrom,
      dateTo,
      locationCountry,
      locationName,
      locationCity,
      locationState,
      updatedAt,
      limit,
      offset,
      sort
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.description.should.be.equal(description);
    model.type.should.be.equal(type);
    model.dateFrom.should.be.equal(dateFrom);
    model.dateTo.should.be.equal(dateTo);
    model.locationCountry.should.be.equal(locationCountry);
    model.locationName.should.be.equal(locationName);
    model.locationCity.should.be.equal(locationCity);
    model.locationState.should.be.equal(locationState);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalsRequest.SearchFestivalsRequestBuilder()
      .withName(name)
      .withDescription(description)
      .withType(type)
      .withDateFrom(dateFrom)
      .withDateTo(dateTo)
      .withLocationCountry(locationCountry)
      .withLocationName(locationName)
      .withLocationCity(locationCity)
      .withLocationState(locationState)
      .withUpdatedAt(updatedAt)
      .withLimit(limit)
      .withOffset(offset)
      .withSort(sort)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.description.should.be.equal(description);
    model.type.should.be.equal(type);
    model.dateFrom.should.be.equal(dateFrom);
    model.dateTo.should.be.equal(dateTo);
    model.locationCountry.should.be.equal(locationCountry);
    model.locationName.should.be.equal(locationName);
    model.locationCity.should.be.equal(locationCity);
    model.locationState.should.be.equal(locationState);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

});