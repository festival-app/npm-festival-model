var chai = require('chai');
var should = chai.should();
var eventCategoryResponse = require('../../../lib/model/response/eventCategoryResponse');

describe('eventCategoryResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = 'breadcrumbs';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var eventCategoryResponseModel = new eventCategoryResponse.EventCategoryResponse(
      id, 
      name, 
      breadcrumbs, 
      createdAt, 
      updatedAt
    );

    should.exist(eventCategoryResponseModel);
    eventCategoryResponseModel.id.should.be.equal(id);
    eventCategoryResponseModel.name.should.be.equal(name);
    eventCategoryResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    eventCategoryResponseModel.createdAt.should.be.equal(createdAt);
    eventCategoryResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var eventCategoryResponseModel = new eventCategoryResponse.EventCategoryResponseBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(eventCategoryResponseModel);
    eventCategoryResponseModel.id.should.be.equal(id);
    eventCategoryResponseModel.name.should.be.equal(name);
    eventCategoryResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    eventCategoryResponseModel.createdAt.should.be.equal(createdAt);
    eventCategoryResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
