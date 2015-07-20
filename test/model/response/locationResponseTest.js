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
  var coordinates = 'coordinates';

  it('should create model', function (done) {

    var locationResponseModel = new locationResponse.LocationResponse(
      name, 
      state, 
      country, 
      street, 
      zip, 
      openingTimes, 
      coordinates
    );

    should.exist(locationResponseModel);
    locationResponseModel.name.should.be.equal(name);
    locationResponseModel.state.should.be.equal(state);
    locationResponseModel.country.should.be.equal(country);
    locationResponseModel.street.should.be.equal(street);
    locationResponseModel.zip.should.be.equal(zip);
    locationResponseModel.openingTimes.should.be.equal(openingTimes);
    locationResponseModel.coordinates.should.be.equal(coordinates);
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
      .withCoordinates(coordinates)
      .build();

    should.exist(locationResponseModel);
    locationResponseModel.name.should.be.equal(name);
    locationResponseModel.state.should.be.equal(state);
    locationResponseModel.country.should.be.equal(country);
    locationResponseModel.street.should.be.equal(street);
    locationResponseModel.zip.should.be.equal(zip);
    locationResponseModel.openingTimes.should.be.equal(openingTimes);
    locationResponseModel.coordinates.should.be.equal(coordinates);
    done();
  });

});
