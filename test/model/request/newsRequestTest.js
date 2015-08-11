var chai = require('chai');
var should = chai.should();
var newsRequest = require('../../../lib/model/request/newsRequest');

describe('newsRequest model test', function () {

  var name = 'name';
  var description = 'description';
  var images = 'images';
  var authors = 'authors';
  var tags = 'tags';

  it('should create model', function (done) {

    var newsRequestModel = new newsRequest.NewsRequest(
      name, 
      description, 
      images, 
      authors, 
      tags
    );

    should.exist(newsRequestModel);
    newsRequestModel.name.should.be.equal(name);
    newsRequestModel.description.should.be.equal(description);
    newsRequestModel.images.should.be.equal(images);
    newsRequestModel.authors.should.be.equal(authors);
    newsRequestModel.tags.should.be.equal(tags);
    done();
  });

  it('should create model by builder', function (done) {

    var newsRequestModel = new newsRequest.NewsRequestBuilder()
      .withName(name)
      .withDescription(description)
      .withImages(images)
      .withAuthors(authors)
      .withTags(tags)
      .build();

    should.exist(newsRequestModel);
    newsRequestModel.name.should.be.equal(name);
    newsRequestModel.description.should.be.equal(description);
    newsRequestModel.images.should.be.equal(images);
    newsRequestModel.authors.should.be.equal(authors);
    newsRequestModel.tags.should.be.equal(tags);
    done();
  });

});
