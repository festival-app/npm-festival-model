var chai = require('chai');
var should = chai.should();
var searchFestivalEventsRequest = require('../../lib/model/searchFestivalEventsRequest');

describe('searchFestivalEventsRequest model test', function () {

  var name = 'name';
  var place = 'place';
  var startAt = '12-01-1988';
  var finishAt = '13-01-1988';
  var category = 'category';
  var limit = 11;
  var offset = 1;

  it('should create model', function (done) {

    var model = new searchFestivalEventsRequest.SearchFestivalEventsRequest(
      name,
      place,
      startAt,
      finishAt,
      category,
      limit,
      offset
    );

    should.exist(model);
    model.name.should.be.equal(name);
    model.place.should.be.equal(place);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.category.should.be.equal(category);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchFestivalEventsRequest.SearchFestivalEventsRequestBuilder()
      .withName(name)
      .withPlace(place)
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .withCategory(category)
      .withLimit(limit)
      .withOffset(offset)
      .build();

    should.exist(model);
    model.name.should.be.equal(name);
    model.place.should.be.equal(place);
    model.startAt.should.be.equal(startAt);
    model.finishAt.should.be.equal(finishAt);
    model.category.should.be.equal(category);
    model.limit.should.be.equal(limit);
    model.offset.should.be.equal(offset);

    done();
  });

});