var chai = require('chai');
var should = chai.should();
var coordinatesRequest = require('../../../lib/model/request/coordinatesRequest');

describe('coordinatesRequest model test', function () {

  var lat = 'lat';
  var lon = 'lon';

  it('should create model', function (done) {

    var coordinatesRequestModel = new coordinatesRequest.CoordinatesRequest(
      lat, 
      lon
    );

    should.exist(coordinatesRequestModel);
    coordinatesRequestModel.lat.should.be.equal(lat);
    coordinatesRequestModel.lon.should.be.equal(lon);
    done();
  });

  it('should create model by builder', function (done) {

    var coordinatesRequestModel = new coordinatesRequest.CoordinatesRequestBuilder()
      .withLat(lat)
      .withLon(lon)
      .build();

    should.exist(coordinatesRequestModel);
    coordinatesRequestModel.lat.should.be.equal(lat);
    coordinatesRequestModel.lon.should.be.equal(lon);
    done();
  });

});
