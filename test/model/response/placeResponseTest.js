var chai = require('chai');
var should = chai.should();
var placeResponse = require('../../../lib/model/response/placeResponse');

describe('placeResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var parent = 'parent';
  var openingTimes = 'openingTimes';
  var coordinates = 'coordinates';
  var mainImage = 'mainImage';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var placeResponseModel = new placeResponse.PlaceResponse(
      id, 
      name, 
      parent, 
      openingTimes, 
      coordinates, 
      mainImage, 
      createdAt, 
      updatedAt
    );

    should.exist(placeResponseModel);
    placeResponseModel.id.should.be.equal(id);
    placeResponseModel.name.should.be.equal(name);
    placeResponseModel.parent.should.be.equal(parent);
    placeResponseModel.openingTimes.should.be.equal(openingTimes);
    placeResponseModel.coordinates.should.be.equal(coordinates);
    placeResponseModel.mainImage.should.be.equal(mainImage);
    placeResponseModel.createdAt.should.be.equal(createdAt);
    placeResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var placeResponseModel = new placeResponse.PlaceResponseBuilder()
      .withId(id)
      .withName(name)
      .withParent(parent)
      .withOpeningTimes(openingTimes)
      .withCoordinates(coordinates)
      .withMainImage(mainImage)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(placeResponseModel);
    placeResponseModel.id.should.be.equal(id);
    placeResponseModel.name.should.be.equal(name);
    placeResponseModel.parent.should.be.equal(parent);
    placeResponseModel.openingTimes.should.be.equal(openingTimes);
    placeResponseModel.coordinates.should.be.equal(coordinates);
    placeResponseModel.mainImage.should.be.equal(mainImage);
    placeResponseModel.createdAt.should.be.equal(createdAt);
    placeResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
