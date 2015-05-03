var chai = require('chai');
var should = chai.should();
var event = require('../../../lib/model/response/event');

describe('event model test', function () {

  var id = 'id';
  var name = 'name';
  var description = 'description';
  var tags = ['tags'];
  var duration = {'duration': 111};
  var place = 'place';
  var category = 'category';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var eventModel = new event.Event(
      id,
      name,
      description,
      tags,
      duration,
      place,
      category,
      createdAt,
      updatedAt
    );

    should.exist(eventModel);
    eventModel.id.should.be.equal(id);
    eventModel.name.should.be.equal(name);
    eventModel.description.should.be.equal(description);
    eventModel.tags.should.be.equal(tags);
    eventModel.duration.should.be.equal(duration);
    eventModel.place.should.be.equal(place);
    eventModel.category.should.be.equal(category);
    eventModel.createdAt.should.be.equal(createdAt);
    eventModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

  it('should create model by builder', function (done) {

    var eventModel = new event.EventBuilder()
      .withId(id)
      .withName(name)
      .withDescription(description)
      .withTags(tags)
      .withDuration(duration)
      .withPlace(place)
      .withCategory(category)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(eventModel);
    eventModel.id.should.be.equal(id);
    eventModel.name.should.be.equal(name);
    eventModel.description.should.be.equal(description);
    eventModel.tags.should.be.equal(tags);
    eventModel.duration.should.be.equal(duration);
    eventModel.place.should.be.equal(place);
    eventModel.category.should.be.equal(category);
    eventModel.createdAt.should.be.equal(createdAt);
    eventModel.updatedAt.should.be.equal(updatedAt);

    done();
  });

});