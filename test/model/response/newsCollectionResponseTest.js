var chai = require('chai');
var should = chai.should();
var newsCollectionResponse = require('../../../lib/model/response/newsCollectionResponse');

describe('newsCollectionResponse model test', function () {

  var total = 'total';
  var news = 'news';

  it('should create model', function (done) {

    var newsCollectionResponseModel = new newsCollectionResponse.NewsCollectionResponse(
      total, 
      news
    );

    should.exist(newsCollectionResponseModel);
    newsCollectionResponseModel.total.should.be.equal(total);
    newsCollectionResponseModel.news.should.be.equal(news);
    done();
  });

  it('should create model by builder', function (done) {

    var newsCollectionResponseModel = new newsCollectionResponse.NewsCollectionResponseBuilder()
      .withTotal(total)
      .withNews(news)
      .build();

    should.exist(newsCollectionResponseModel);
    newsCollectionResponseModel.total.should.be.equal(total);
    newsCollectionResponseModel.news.should.be.equal(news);
    done();
  });

});
