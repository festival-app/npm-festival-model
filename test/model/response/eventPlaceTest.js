var chai = require('chai');
var should = chai.should();
var eventPlace = require('../../../lib/model/response/eventPlace');

describe('eventPlace model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = ['breadcrumbs'];
  var openingTimes = [{from: 'openingTimes'}];

  it('should create model', function (done) {

    var placeModel = new eventPlace.EventPlace(
      id,
      name,
      breadcrumbs,
      openingTimes
    );

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.breadcrumbs.should.be.equal(breadcrumbs);
    placeModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

  it('should create model by builder', function (done) {

    var placeModel = new eventPlace.EventPlaceBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .withOpeningTimes(openingTimes)
      .build();

    should.exist(placeModel);
    placeModel.id.should.be.equal(id);
    placeModel.name.should.be.equal(name);
    placeModel.breadcrumbs.should.be.equal(breadcrumbs);
    placeModel.openingTimes.should.be.equal(openingTimes);

    done();
  });

});