var chai = require('chai');
var should = chai.should();
var eventResponse = require('../../../lib/model/response/eventResponse');

describe('eventResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var description = 'description';
  var tags = 'tags';
  var status = 'status';
  var mainImage = 'mainImage';
  var duration = 'duration';
  var place = 'place';
  var category = 'category';
  var authors = 'authors';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var eventResponseModel = new eventResponse.EventResponse(
      id, 
      name, 
      description, 
      tags, 
      status, 
      mainImage, 
      duration, 
      place, 
      category, 
      authors, 
      createdAt, 
      updatedAt
    );

    should.exist(eventResponseModel);
    eventResponseModel.id.should.be.equal(id);
    eventResponseModel.name.should.be.equal(name);
    eventResponseModel.description.should.be.equal(description);
    eventResponseModel.tags.should.be.equal(tags);
    eventResponseModel.status.should.be.equal(status);
    eventResponseModel.mainImage.should.be.equal(mainImage);
    eventResponseModel.duration.should.be.equal(duration);
    eventResponseModel.place.should.be.equal(place);
    eventResponseModel.category.should.be.equal(category);
    eventResponseModel.authors.should.be.equal(authors);
    eventResponseModel.createdAt.should.be.equal(createdAt);
    eventResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var eventResponseModel = new eventResponse.EventResponseBuilder()
      .withId(id)
      .withName(name)
      .withDescription(description)
      .withTags(tags)
      .withStatus(status)
      .withMainImage(mainImage)
      .withDuration(duration)
      .withPlace(place)
      .withCategory(category)
      .withAuthors(authors)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(eventResponseModel);
    eventResponseModel.id.should.be.equal(id);
    eventResponseModel.name.should.be.equal(name);
    eventResponseModel.description.should.be.equal(description);
    eventResponseModel.tags.should.be.equal(tags);
    eventResponseModel.status.should.be.equal(status);
    eventResponseModel.mainImage.should.be.equal(mainImage);
    eventResponseModel.duration.should.be.equal(duration);
    eventResponseModel.place.should.be.equal(place);
    eventResponseModel.category.should.be.equal(category);
    eventResponseModel.authors.should.be.equal(authors);
    eventResponseModel.createdAt.should.be.equal(createdAt);
    eventResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
