var chai = require('chai');
var should = chai.should();
var eventPlaceResponse = require('../../../lib/model/response/eventPlaceResponse');

describe('eventPlaceResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = 'breadcrumbs';
  var openingTimes = 'openingTimes';
  var cordinates = 'cordinates';

  it('should create model', function (done) {

    var eventPlaceResponseModel = new eventPlaceResponse.EventPlaceResponse(
      id, 
      name, 
      breadcrumbs, 
      openingTimes, 
      cordinates
    );

    should.exist(eventPlaceResponseModel);
    eventPlaceResponseModel.id.should.be.equal(id);
    eventPlaceResponseModel.name.should.be.equal(name);
    eventPlaceResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    eventPlaceResponseModel.openingTimes.should.be.equal(openingTimes);
    eventPlaceResponseModel.cordinates.should.be.equal(cordinates);
    done();
  });

  it('should create model by builder', function (done) {

    var eventPlaceResponseModel = new eventPlaceResponse.EventPlaceResponseBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .withOpeningTimes(openingTimes)
      .withCordinates(cordinates)
      .build();

    should.exist(eventPlaceResponseModel);
    eventPlaceResponseModel.id.should.be.equal(id);
    eventPlaceResponseModel.name.should.be.equal(name);
    eventPlaceResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    eventPlaceResponseModel.openingTimes.should.be.equal(openingTimes);
    eventPlaceResponseModel.cordinates.should.be.equal(cordinates);
    done();
  });

});
