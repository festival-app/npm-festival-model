var chai = require('chai');
var should = chai.should();
var imageRequest = require('../../../lib/model/request/imageRequest');

describe('imageRequest model test', function () {

  var url = 'url';
  var content = 'content';
  var order = 'order';

  it('should create model', function (done) {

    var imageRequestModel = new imageRequest.ImageRequest(
      url, 
      content, 
      order
    );

    should.exist(imageRequestModel);
    imageRequestModel.url.should.be.equal(url);
    imageRequestModel.content.should.be.equal(content);
    imageRequestModel.order.should.be.equal(order);
    done();
  });

  it('should create model by builder', function (done) {

    var imageRequestModel = new imageRequest.ImageRequestBuilder()
      .withUrl(url)
      .withContent(content)
      .withOrder(order)
      .build();

    should.exist(imageRequestModel);
    imageRequestModel.url.should.be.equal(url);
    imageRequestModel.content.should.be.equal(content);
    imageRequestModel.order.should.be.equal(order);
    done();
  });

});
