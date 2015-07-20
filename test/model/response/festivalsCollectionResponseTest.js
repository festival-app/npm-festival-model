var chai = require('chai');
var should = chai.should();
var festivalsCollectionResponse = require('../../../lib/model/response/festivalsCollectionResponse');

describe('festivalsCollectionResponse model test', function () {

  var total = 'total';
  var festivals = 'festivals';

  it('should create model', function (done) {

    var festivalsCollectionResponseModel = new festivalsCollectionResponse.FestivalsCollectionResponse(
      total, 
      festivals
    );

    should.exist(festivalsCollectionResponseModel);
    festivalsCollectionResponseModel.total.should.be.equal(total);
    festivalsCollectionResponseModel.festivals.should.be.equal(festivals);
    done();
  });

  it('should create model by builder', function (done) {

    var festivalsCollectionResponseModel = new festivalsCollectionResponse.FestivalsCollectionResponseBuilder()
      .withTotal(total)
      .withFestivals(festivals)
      .build();

    should.exist(festivalsCollectionResponseModel);
    festivalsCollectionResponseModel.total.should.be.equal(total);
    festivalsCollectionResponseModel.festivals.should.be.equal(festivals);
    done();
  });

});
