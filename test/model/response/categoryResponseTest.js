var chai = require('chai');
var should = chai.should();
var categoryResponse = require('../../../lib/model/response/categoryResponse');

describe('categoryResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var parent = 'parent';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var categoryResponseModel = new categoryResponse.CategoryResponse(
      id, 
      name, 
      parent, 
      createdAt, 
      updatedAt
    );

    should.exist(categoryResponseModel);
    categoryResponseModel.id.should.be.equal(id);
    categoryResponseModel.name.should.be.equal(name);
    categoryResponseModel.parent.should.be.equal(parent);
    categoryResponseModel.createdAt.should.be.equal(createdAt);
    categoryResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var categoryResponseModel = new categoryResponse.CategoryResponseBuilder()
      .withId(id)
      .withName(name)
      .withParent(parent)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(categoryResponseModel);
    categoryResponseModel.id.should.be.equal(id);
    categoryResponseModel.name.should.be.equal(name);
    categoryResponseModel.parent.should.be.equal(parent);
    categoryResponseModel.createdAt.should.be.equal(createdAt);
    categoryResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
