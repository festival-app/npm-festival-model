var chai = require('chai');
var should = chai.should();
var place = require('../../../lib/model/response/place');

describe('place model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = ['breadcrumbs'];
  var openingTimes = [{from: 'openingTimes'}];
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var placeModel = new place.Place(
      id,
      name,
      breadcrumbs,
      openingTimes,
      createdAt,
      updatedAt
    );

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.breadcrumbs.should.be.equal(breadcrumbs);
    placeModel.openingTimes.should.be.equal(openingTimes);
    placeModel.createdAt.should.be.equal(createdAt);
    placeModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

  it('should create model by builder', function (done) {

    var placeModel = new place.PlaceBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .withOpeningTimes(openingTimes)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.breadcrumbs.should.be.equal(breadcrumbs);
    placeModel.openingTimes.should.be.equal(openingTimes);
    placeModel.createdAt.should.be.equal(createdAt);
    placeModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

});