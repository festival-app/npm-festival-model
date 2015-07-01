var chai = require('chai');
var should = chai.should();
var category = require('../../../lib/model/response/category');

describe('category model test', function () {

  var id = 'id';
  var name = 'name';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';
  var parent = 'parent';

  it('should create model', function (done) {

    var categoryModel = new category.Category(
      id,
      name,
      createdAt,
      updatedAt,
      parent
    );

    should.exist(categoryModel);
    categoryModel.id.should.be.equal(id);
    categoryModel.name.should.be.equal(name);
    categoryModel.createdAt.should.be.equal(createdAt);
    categoryModel.updatedAt.should.be.equal(updatedAt);
    categoryModel.parent.should.be.equal(parent);

    done();
  });

  it('should create model by builder', function (done) {

    var categoryModel = new category.CategoryBuilder()
      .withId(id)
      .withName(name)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .withParent(parent)
      .build();

    should.exist(categoryModel);
    categoryModel.id.should.be.equal(id);
    categoryModel.name.should.be.equal(name);
    categoryModel.createdAt.should.be.equal(createdAt);
    categoryModel.updatedAt.should.be.equal(updatedAt);
    categoryModel.parent.should.be.equal(parent);

    done();
  });

});