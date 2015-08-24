var chai = require('chai');
var should = chai.should();
var placeRequest = require('../../../lib/model/request/placeRequest');

describe('placeRequest model test', function () {

  var name = 'name';
  var parent = 'parent';
  var openingTimes = 'openingTimes';
  var coordinates = 'coordinates';
  var images = 'images';

  it('should create model', function (done) {

    var placeRequestModel = new placeRequest.PlaceRequest(
      name, 
      parent, 
      openingTimes, 
      coordinates, 
      images
    );

    should.exist(placeRequestModel);
    placeRequestModel.name.should.be.equal(name);
    placeRequestModel.parent.should.be.equal(parent);
    placeRequestModel.openingTimes.should.be.equal(openingTimes);
    placeRequestModel.coordinates.should.be.equal(coordinates);
    placeRequestModel.images.should.be.equal(images);
    done();
  });

  it('should create model by builder', function (done) {

    var placeRequestModel = new placeRequest.PlaceRequestBuilder()
      .withName(name)
      .withParent(parent)
      .withOpeningTimes(openingTimes)
      .withCoordinates(coordinates)
      .withImages(images)
      .build();

    should.exist(placeRequestModel);
    placeRequestModel.name.should.be.equal(name);
    placeRequestModel.parent.should.be.equal(parent);
    placeRequestModel.openingTimes.should.be.equal(openingTimes);
    placeRequestModel.coordinates.should.be.equal(coordinates);
    placeRequestModel.images.should.be.equal(images);
    done();
  });

});
