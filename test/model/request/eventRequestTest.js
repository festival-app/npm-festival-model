var chai = require('chai');
var should = chai.should();
var eventRequest = require('../../../lib/model/request/eventRequest');

describe('eventRequest model test', function () {

  var name = 'name';
  var description = 'description';
  var tags = 'tags';
  var metadata = 'metadata';
  var images = 'images';
  var duration = 'duration';
  var place = 'place';
  var category = 'category';
  var authors = 'authors';

  it('should create model', function (done) {

    var eventRequestModel = new eventRequest.EventRequest(
      name, 
      description, 
      tags, 
      metadata, 
      images, 
      duration, 
      place, 
      category, 
      authors
    );

    should.exist(eventRequestModel);
    eventRequestModel.name.should.be.equal(name);
    eventRequestModel.description.should.be.equal(description);
    eventRequestModel.tags.should.be.equal(tags);
    eventRequestModel.metadata.should.be.equal(metadata);
    eventRequestModel.images.should.be.equal(images);
    eventRequestModel.duration.should.be.equal(duration);
    eventRequestModel.place.should.be.equal(place);
    eventRequestModel.category.should.be.equal(category);
    eventRequestModel.authors.should.be.equal(authors);
    done();
  });

  it('should create model by builder', function (done) {

    var eventRequestModel = new eventRequest.EventRequestBuilder()
      .withName(name)
      .withDescription(description)
      .withTags(tags)
      .withMetadata(metadata)
      .withImages(images)
      .withDuration(duration)
      .withPlace(place)
      .withCategory(category)
      .withAuthors(authors)
      .build();

    should.exist(eventRequestModel);
    eventRequestModel.name.should.be.equal(name);
    eventRequestModel.description.should.be.equal(description);
    eventRequestModel.tags.should.be.equal(tags);
    eventRequestModel.metadata.should.be.equal(metadata);
    eventRequestModel.images.should.be.equal(images);
    eventRequestModel.duration.should.be.equal(duration);
    eventRequestModel.place.should.be.equal(place);
    eventRequestModel.category.should.be.equal(category);
    eventRequestModel.authors.should.be.equal(authors);
    done();
  });

});
