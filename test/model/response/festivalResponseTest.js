var chai = require('chai');
var should = chai.should();
var festivalResponse = require('../../../lib/model/response/festivalResponse');

describe('festivalResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var description = 'description';
  var type = 'type';
  var tags = 'tags';
  var mainImage = 'mainImage';
  var duration = 'duration';
  var locations = 'locations';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var festivalResponseModel = new festivalResponse.FestivalResponse(
      id, 
      name, 
      description, 
      type, 
      tags, 
      mainImage, 
      duration, 
      locations, 
      createdAt, 
      updatedAt
    );

    should.exist(festivalResponseModel);
    festivalResponseModel.id.should.be.equal(id);
    festivalResponseModel.name.should.be.equal(name);
    festivalResponseModel.description.should.be.equal(description);
    festivalResponseModel.type.should.be.equal(type);
    festivalResponseModel.tags.should.be.equal(tags);
    festivalResponseModel.mainImage.should.be.equal(mainImage);
    festivalResponseModel.duration.should.be.equal(duration);
    festivalResponseModel.locations.should.be.equal(locations);
    festivalResponseModel.createdAt.should.be.equal(createdAt);
    festivalResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var festivalResponseModel = new festivalResponse.FestivalResponseBuilder()
      .withId(id)
      .withName(name)
      .withDescription(description)
      .withType(type)
      .withTags(tags)
      .withMainImage(mainImage)
      .withDuration(duration)
      .withLocations(locations)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(festivalResponseModel);
    festivalResponseModel.id.should.be.equal(id);
    festivalResponseModel.name.should.be.equal(name);
    festivalResponseModel.description.should.be.equal(description);
    festivalResponseModel.type.should.be.equal(type);
    festivalResponseModel.tags.should.be.equal(tags);
    festivalResponseModel.mainImage.should.be.equal(mainImage);
    festivalResponseModel.duration.should.be.equal(duration);
    festivalResponseModel.locations.should.be.equal(locations);
    festivalResponseModel.createdAt.should.be.equal(createdAt);
    festivalResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
