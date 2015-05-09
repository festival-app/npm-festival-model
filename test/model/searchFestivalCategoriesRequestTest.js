var chai = require('chai');
var should = chai.should();
var searchFestivalCategoriesRequest = require('../../lib/model/searchFestivalCategoriesRequest');

describe('searchFestivalCategoriesRequest model test', function () {

  var name = 'name';
  var parent = 'parent';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;

  it('should create model', function (done) {

    var model = new searchFestivalCategoriesRequest.SearchFestivalCategoriesRequest(
      name,
      parent,
      updatedAt,
      limit,
      offset
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.parent.should.be.equal(parent);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalCategoriesRequest.SearchFestivalCategoriesRequestBuilder()
      .withName(name)
      .withParent(parent)
      .withUpdatedAt(updatedAt)
      .withLimit(limit)
      .withOffset(offset)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.parent.should.be.equal(parent);
    model.updatedAt.should.be.equal(updatedAt);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

});