var chai = require('chai');
var should = chai.should();
var eventCategoryResponse = require('../../../lib/model/response/eventCategoryResponse');

describe('eventCategoryResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = 'breadcrumbs';

  it('should create model', function (done) {

    var eventCategoryResponseModel = new eventCategoryResponse.EventCategoryResponse(
      id, 
      name, 
      breadcrumbs
    );

    should.exist(eventCategoryResponseModel);
    eventCategoryResponseModel.id.should.be.equal(id);
    eventCategoryResponseModel.name.should.be.equal(name);
    eventCategoryResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    done();
  });

  it('should create model by builder', function (done) {

    var eventCategoryResponseModel = new eventCategoryResponse.EventCategoryResponseBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .build();

    should.exist(eventCategoryResponseModel);
    eventCategoryResponseModel.id.should.be.equal(id);
    eventCategoryResponseModel.name.should.be.equal(name);
    eventCategoryResponseModel.breadcrumbs.should.be.equal(breadcrumbs);
    done();
  });

});
