var chai = require('chai');
var should = chai.should();
var newsResponse = require('../../../lib/model/response/newsResponse');

describe('newsResponse model test', function () {

  var id = 'id';
  var name = 'name';
  var description = 'description';
  var mainImage = 'mainImage';
  var authors = 'authors';
  var tags = 'tags';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var newsResponseModel = new newsResponse.NewsResponse(
      id, 
      name, 
      description, 
      mainImage, 
      authors, 
      tags, 
      createdAt, 
      updatedAt
    );

    should.exist(newsResponseModel);
    newsResponseModel.id.should.be.equal(id);
    newsResponseModel.name.should.be.equal(name);
    newsResponseModel.description.should.be.equal(description);
    newsResponseModel.mainImage.should.be.equal(mainImage);
    newsResponseModel.authors.should.be.equal(authors);
    newsResponseModel.tags.should.be.equal(tags);
    newsResponseModel.createdAt.should.be.equal(createdAt);
    newsResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var newsResponseModel = new newsResponse.NewsResponseBuilder()
      .withId(id)
      .withName(name)
      .withDescription(description)
      .withMainImage(mainImage)
      .withAuthors(authors)
      .withTags(tags)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(newsResponseModel);
    newsResponseModel.id.should.be.equal(id);
    newsResponseModel.name.should.be.equal(name);
    newsResponseModel.description.should.be.equal(description);
    newsResponseModel.mainImage.should.be.equal(mainImage);
    newsResponseModel.authors.should.be.equal(authors);
    newsResponseModel.tags.should.be.equal(tags);
    newsResponseModel.createdAt.should.be.equal(createdAt);
    newsResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
