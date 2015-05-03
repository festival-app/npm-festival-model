var chai = require('chai');
var should = chai.should();
var place = require('../../../lib/model/response/place');

describe('place model test', function () {

  var id = 'id';
  var parent = 'parent';
  var name = 'name';
  var openingTimes = [{from: 'openingTimes'}];

  it('should create model', function (done) {

    var placeModel = new place.Place(
      id,
      parent,
      name,
      openingTimes
    );

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.parent.should.be.equal(parent);
    placeModel.name.should.be.equal(name);
    placeModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

  it('should create model by builder', function (done) {

    var placeModel = new place.PlaceBuilder()
      .withId(id)
      .withParent(parent)
      .withName(name)
      .withOpeningTimes(openingTimes)
      .build();

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.parent.should.be.equal(parent);
    placeModel.name.should.be.equal(name);
    placeModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

});