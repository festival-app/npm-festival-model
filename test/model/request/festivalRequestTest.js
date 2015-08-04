var chai = require('chai');
var should = chai.should();
var festivalRequest = require('../../../lib/model/request/festivalRequest');

describe('festivalRequest model test', function () {

  var name = 'name';
  var description = 'description';
  var type = 'type';
  var tags = 'tags';
  var images = 'images';
  var duration = 'duration';
  var locations = 'locations';

  it('should create model', function (done) {

    var festivalRequestModel = new festivalRequest.FestivalRequest(
      name, 
      description, 
      type, 
      tags, 
      images, 
      duration, 
      locations
    );

    should.exist(festivalRequestModel);
    festivalRequestModel.name.should.be.equal(name);
    festivalRequestModel.description.should.be.equal(description);
    festivalRequestModel.type.should.be.equal(type);
    festivalRequestModel.tags.should.be.equal(tags);
    festivalRequestModel.images.should.be.equal(images);
    festivalRequestModel.duration.should.be.equal(duration);
    festivalRequestModel.locations.should.be.equal(locations);
    done();
  });

  it('should create model by builder', function (done) {

    var festivalRequestModel = new festivalRequest.FestivalRequestBuilder()
      .withName(name)
      .withDescription(description)
      .withType(type)
      .withTags(tags)
      .withImages(images)
      .withDuration(duration)
      .withLocations(locations)
      .build();

    should.exist(festivalRequestModel);
    festivalRequestModel.name.should.be.equal(name);
    festivalRequestModel.description.should.be.equal(description);
    festivalRequestModel.type.should.be.equal(type);
    festivalRequestModel.tags.should.be.equal(tags);
    festivalRequestModel.images.should.be.equal(images);
    festivalRequestModel.duration.should.be.equal(duration);
    festivalRequestModel.locations.should.be.equal(locations);
    done();
  });

});
