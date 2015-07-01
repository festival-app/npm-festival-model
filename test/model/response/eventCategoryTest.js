var chai = require('chai');
var should = chai.should();
var eventCategory = require('../../../lib/model/response/eventCategory');

describe('eventCategory model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = ['breadcrumbs'];

  it('should create model', function (done) {

    var eventCategoryModel = new eventCategory.EventCategory(
      id,
      name,
      breadcrumbs
    );

    should.exist(eventCategoryModel);
    eventCategoryModel.id.should.be.equal(id);
    eventCategoryModel.name.should.be.equal(name);
    eventCategoryModel.breadcrumbs.should.be.equal(breadcrumbs);

    done();
  });

  it('should create model by builder', function (done) {

    var eventCategoryModel = new eventCategory.EventCategoryBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .build();

    should.exist(eventCategoryModel);
    eventCategoryModel.id.should.be.equal(id);
    eventCategoryModel.name.should.be.equal(name);
    eventCategoryModel.breadcrumbs.should.be.equal(breadcrumbs);

    done();
  });

});