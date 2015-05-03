var chai = require('chai');
var should = chai.should();
var location = require('../../../lib/model/response/location');

describe('location model test', function () {

  var name = 'name';
  var state = 'state';
  var country = 'country';
  var street = 'street';
  var zip = 'zip';
  var openingTimes = [{from: 'openingTimes'}];

  it('should create model', function (done) {

    var locationModel = new location.Location(
      name,
      state,
      country,
      street,
      zip,
      openingTimes
    );

    should.exist(locationModel);
    locationModel.name.should.be.equal(name);
    locationModel.state.should.be.equal(state);
    locationModel.country.should.be.equal(country);
    locationModel.street.should.be.equal(street);
    locationModel.zip.should.be.equal(zip);
    locationModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

  it('should create model by builder', function (done) {

    var locationModel = new location.LocationBuilder()
      .withName(name)
      .withState(state)
      .withCountry(country)
      .withStreet(street)
      .withZip(zip)
      .withOpeningTimes(openingTimes)
      .build();

    should.exist(locationModel);
    locationModel.name.should.be.equal(name);
    locationModel.state.should.be.equal(state);
    locationModel.country.should.be.equal(country);
    locationModel.street.should.be.equal(street);
    locationModel.zip.should.be.equal(zip);
    locationModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

});