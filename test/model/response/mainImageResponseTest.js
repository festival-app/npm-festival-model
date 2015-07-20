var chai = require('chai');
var should = chai.should();
var mainImageResponse = require('../../../lib/model/response/mainImageResponse');

describe('mainImageResponse model test', function () {

  var small = 'small';
  var medium = 'medium';
  var large = 'large';

  it('should create model', function (done) {

    var mainImageResponseModel = new mainImageResponse.MainImageResponse(
      small, 
      medium, 
      large
    );

    should.exist(mainImageResponseModel);
    mainImageResponseModel.small.should.be.equal(small);
    mainImageResponseModel.medium.should.be.equal(medium);
    mainImageResponseModel.large.should.be.equal(large);
    done();
  });

  it('should create model by builder', function (done) {

    var mainImageResponseModel = new mainImageResponse.MainImageResponseBuilder()
      .withSmall(small)
      .withMedium(medium)
      .withLarge(large)
      .build();

    should.exist(mainImageResponseModel);
    mainImageResponseModel.small.should.be.equal(small);
    mainImageResponseModel.medium.should.be.equal(medium);
    mainImageResponseModel.large.should.be.equal(large);
    done();
  });

});
