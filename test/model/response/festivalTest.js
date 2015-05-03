var chai = require('chai');
var should = chai.should();
var festival = require('../../../lib/model/response/festival');

describe('festival model test', function () {

  var id = 'id';
  var name = 'name';
  var description = 'description';
  var tags = ['tags'];
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';
  var duration = 'duration';
  var locations = [
    {locations: 'locations'}
  ];

  it('should create model', function (done) {

    var festivalModel = new festival.Festival(
      id,
      name,
      description,
      tags,
      createdAt,
      updatedAt,
      duration,
      locations
    );

    should.exist(festivalModel);
    festivalModel.id.should.be.equal(id);
    festivalModel.name.should.be.equal(name);
    festivalModel.description.should.be.equal(description);
    festivalModel.tags.should.be.equal(tags);
    festivalModel.createdAt.should.be.equal(createdAt);
    festivalModel.updatedAt.should.be.equal(updatedAt);
    festivalModel.duration.should.be.equal(duration);
    festivalModel.locations.should.be.equal(locations);

    done();
  });

  it('should create model by builder', function (done) {

    var festivalModel = new festival.FestivalBuilder()
      .withId(id)
      .withName(name)
      .withDescription(description)
      .withTags(tags)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .withDuration(duration)
      .withLocations(locations)
      .build();

    should.exist(festivalModel);
    festivalModel.id.should.be.equal(id);
    festivalModel.name.should.be.equal(name);
    festivalModel.description.should.be.equal(description);
    festivalModel.tags.should.be.equal(tags);
    festivalModel.createdAt.should.be.equal(createdAt);
    festivalModel.updatedAt.should.be.equal(updatedAt);
    festivalModel.duration.should.be.equal(duration);
    festivalModel.locations.should.be.equal(locations);

    done();
  });

});