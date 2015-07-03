var chai = require('chai');
var should = chai.should();
var place = require('../../../lib/model/response/place');

describe('place model test', function () {

  var id = 'id';
  var name = 'name';
  var openingTimes = [{from: 'openingTimes'}];
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';
  var parent = 'parent';

  it('should create model', function (done) {

    var placeModel = new place.Place(
      id,
      name,
      openingTimes,
      createdAt,
      updatedAt,
      parent
    );

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.openingTimes.should.be.equal(openingTimes);
    placeModel.createdAt.should.be.equal(createdAt);
    placeModel.updatedAt.should.be.equal(updatedAt);
    placeModel.parent.should.be.equal(parent);

    done();
  });

  it('should create model by builder', function (done) {

    var placeModel = new place.PlaceBuilder()
      .withId(id)
      .withName(name)
      .withOpeningTimes(openingTimes)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .withParent(parent)
      .build();

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.openingTimes.should.be.equal(openingTimes);
    placeModel.createdAt.should.be.equal(createdAt);
    placeModel.updatedAt.should.be.equal(updatedAt);
    placeModel.parent.should.be.equal(parent);

    done();
  });

});