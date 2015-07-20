var chai = require('chai');
var should = chai.should();
var coordinatesResponse = require('../../../lib/model/response/coordinatesResponse');

describe('coordinatesResponse model test', function () {

  var lat = 'lat';
  var lon = 'lon';

  it('should create model', function (done) {

    var coordinatesResponseModel = new coordinatesResponse.CoordinatesResponse(
      lat, 
      lon
    );

    should.exist(coordinatesResponseModel);
    coordinatesResponseModel.lat.should.be.equal(lat);
    coordinatesResponseModel.lon.should.be.equal(lon);
    done();
  });

  it('should create model by builder', function (done) {

    var coordinatesResponseModel = new coordinatesResponse.CoordinatesResponseBuilder()
      .withLat(lat)
      .withLon(lon)
      .build();

    should.exist(coordinatesResponseModel);
    coordinatesResponseModel.lat.should.be.equal(lat);
    coordinatesResponseModel.lon.should.be.equal(lon);
    done();
  });

});
