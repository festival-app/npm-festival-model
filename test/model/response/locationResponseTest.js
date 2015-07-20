var chai = require('chai');
var should = chai.should();
var locationResponse = require('../../../lib/model/response/locationResponse');

describe('locationResponse model test', function () {

  var name = 'name';
  var state = 'state';
  var country = 'country';
  var street = 'street';
  var zip = 'zip';
  var openingTimes = 'openingTimes';
  var cordinates = 'cordinates';

  it('should create model', function (done) {

    var locationResponseModel = new locationResponse.LocationResponse(
      name, 
      state, 
      country, 
      street, 
      zip, 
      openingTimes, 
      cordinates
    );

    should.exist(locationResponseModel);
    locationResponseModel.name.should.be.equal(name);
    locationResponseModel.state.should.be.equal(state);
    locationResponseModel.country.should.be.equal(country);
    locationResponseModel.street.should.be.equal(street);
    locationResponseModel.zip.should.be.equal(zip);
    locationResponseModel.openingTimes.should.be.equal(openingTimes);
    locationResponseModel.cordinates.should.be.equal(cordinates);
    done();
  });

  it('should create model by builder', function (done) {

    var locationResponseModel = new locationResponse.LocationResponseBuilder()
      .withName(name)
      .withState(state)
      .withCountry(country)
      .withStreet(street)
      .withZip(zip)
      .withOpeningTimes(openingTimes)
      .withCordinates(cordinates)
      .build();

    should.exist(locationResponseModel);
    locationResponseModel.name.should.be.equal(name);
    locationResponseModel.state.should.be.equal(state);
    locationResponseModel.country.should.be.equal(country);
    locationResponseModel.street.should.be.equal(street);
    locationResponseModel.zip.should.be.equal(zip);
    locationResponseModel.openingTimes.should.be.equal(openingTimes);
    locationResponseModel.cordinates.should.be.equal(cordinates);
    done();
  });

});
