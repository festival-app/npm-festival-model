var chai = require('chai');
var should = chai.should();
var locationRequest = require('../../../lib/model/request/locationRequest');

describe('locationRequest model test', function () {

  var name = 'name';
  var state = 'state';
  var country = 'country';
  var street = 'street';
  var zip = 'zip';
  var openingTimes = 'openingTimes';
  var coordinates = 'coordinates';

  it('should create model', function (done) {

    var locationRequestModel = new locationRequest.LocationRequest(
      name, 
      state, 
      country, 
      street, 
      zip, 
      openingTimes, 
      coordinates
    );

    should.exist(locationRequestModel);
    locationRequestModel.name.should.be.equal(name);
    locationRequestModel.state.should.be.equal(state);
    locationRequestModel.country.should.be.equal(country);
    locationRequestModel.street.should.be.equal(street);
    locationRequestModel.zip.should.be.equal(zip);
    locationRequestModel.openingTimes.should.be.equal(openingTimes);
    locationRequestModel.coordinates.should.be.equal(coordinates);
    done();
  });

  it('should create model by builder', function (done) {

    var locationRequestModel = new locationRequest.LocationRequestBuilder()
      .withName(name)
      .withState(state)
      .withCountry(country)
      .withStreet(street)
      .withZip(zip)
      .withOpeningTimes(openingTimes)
      .withCoordinates(coordinates)
      .build();

    should.exist(locationRequestModel);
    locationRequestModel.name.should.be.equal(name);
    locationRequestModel.state.should.be.equal(state);
    locationRequestModel.country.should.be.equal(country);
    locationRequestModel.street.should.be.equal(street);
    locationRequestModel.zip.should.be.equal(zip);
    locationRequestModel.openingTimes.should.be.equal(openingTimes);
    locationRequestModel.coordinates.should.be.equal(coordinates);
    done();
  });

});
