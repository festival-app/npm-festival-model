var chai = require('chai');
var should = chai.should();
var searchFestivalPlacesRequest = require('../../lib/model/searchFestivalPlacesRequest');

describe('searchFestivalPlacesRequest model test', function () {

  var name = 'name';
  var parent = 'parent';
  var updatedAt = '14-01-1988';
  var limit = 11;
  var offset = 1;

  it('should create model', function (done) {

    var model = new searchFestivalPlacesRequest.SearchFestivalPlacesRequest(
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

    var model = new searchFestivalPlacesRequest.SearchFestivalPlacesRequestBuilder()
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