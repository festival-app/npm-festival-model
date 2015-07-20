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
  var cordinates = 'cordinates';

  it('should create model', function (done) {

    var locationRequestModel = new locationRequest.LocationRequest(
      name, 
      state, 
      country, 
      street, 
      zip, 
      openingTimes, 
      cordinates
    );

    should.exist(locationRequestModel);
    locationRequestModel.name.should.be.equal(name);
    locationRequestModel.state.should.be.equal(state);
    locationRequestModel.country.should.be.equal(country);
    locationRequestModel.street.should.be.equal(street);
    locationRequestModel.zip.should.be.equal(zip);
    locationRequestModel.openingTimes.should.be.equal(openingTimes);
    locationRequestModel.cordinates.should.be.equal(cordinates);
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
      .withCordinates(cordinates)
      .build();

    should.exist(locationRequestModel);
    locationRequestModel.name.should.be.equal(name);
    locationRequestModel.state.should.be.equal(state);
    locationRequestModel.country.should.be.equal(country);
    locationRequestModel.street.should.be.equal(street);
    locationRequestModel.zip.should.be.equal(zip);
    locationRequestModel.openingTimes.should.be.equal(openingTimes);
    locationRequestModel.cordinates.should.be.equal(cordinates);
    done();
  });

});
