var chai = require('chai');
var should = chai.should();
var categoryRequest = require('../../../lib/model/request/categoryRequest');

describe('categoryRequest model test', function () {

  var parent = 'parent';
  var name = 'name';

  it('should create model', function (done) {

    var categoryRequestModel = new categoryRequest.CategoryRequest(
      parent, 
      name
    );

    should.exist(categoryRequestModel);
    categoryRequestModel.parent.should.be.equal(parent);
    categoryRequestModel.name.should.be.equal(name);
    done();
  });

  it('should create model by builder', function (done) {

    var categoryRequestModel = new categoryRequest.CategoryRequestBuilder()
      .withParent(parent)
      .withName(name)
      .build();

    should.exist(categoryRequestModel);
    categoryRequestModel.parent.should.be.equal(parent);
    categoryRequestModel.name.should.be.equal(name);
    done();
  });

});
