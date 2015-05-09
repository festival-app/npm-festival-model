var chai = require('chai');
var should = chai.should();
var category = require('../../../lib/model/response/category');

describe('category model test', function () {

  var id = 'id';
  var name = 'name';
  var breadcrumbs = ['breadcrumbs'];
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var categoryModel = new category.Category(
      id,
      name,
      breadcrumbs,
      createdAt,
      updatedAt
    );

    should.exist(categoryModel);
    categoryModel.id.should.be.equal(id);
    categoryModel.name.should.be.equal(name);
    categoryModel.breadcrumbs.should.be.equal(breadcrumbs);
    categoryModel.createdAt.should.be.equal(createdAt);
    categoryModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

  it('should create model by builder', function (done) {

    var categoryModel = new category.CategoryBuilder()
      .withId(id)
      .withName(name)
      .withBreadcrumbs(breadcrumbs)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(categoryModel);
    categoryModel.id.should.be.equal(id);
    categoryModel.name.should.be.equal(name);
    categoryModel.breadcrumbs.should.be.equal(breadcrumbs);
    categoryModel.createdAt.should.be.equal(createdAt);
    categoryModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

});