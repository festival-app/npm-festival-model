var chai = require('chai');
var should = chai.should();
var searchFestivalEventsRequest = require('../../lib/model/searchFestivalEventsRequest');

describe('searchFestivalEventsRequest model test', function () {

  var name = 'name';
  var place = 'place';
  var startAt = '12-01-1988';
  var finishAt = '13-01-1988';
  var updatedAt = '14-01-1988';
  var category = 'category';
  var limit = 11;
  var offset = 1;
  var sort = 'sort';

  it('should create model', function (done) {

    var model = new searchFestivalEventsRequest.SearchFestivalEventsRequest(
      name,
      place,
      startAt,
      finishAt,
      updatedAt,
      category,
      limit,
      offset,
      sort
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.place.should.be.equal(place);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.updatedAt.should.be.equal(updatedAt);
    model.category.should.be.equal(category);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalEventsRequest.SearchFestivalEventsRequestBuilder()
      .withName(name)
      .withPlace(place)
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .withUpdatedAt(updatedAt)
      .withCategory(category)
      .withLimit(limit)
      .withOffset(offset)
      .withSort(sort)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.place.should.be.equal(place);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.updatedAt.should.be.equal(updatedAt);
    model.category.should.be.equal(category);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);
    model.sort.should.be.equal(sort);

    done();
  });

});