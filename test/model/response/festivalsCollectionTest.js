var chai = require('chai');
var should = chai.should();
var festivalsCollection = require('../../../lib/model/response/festivalsCollection');

describe('festivals collection model test', function () {

  var total = 22;
  var festivals = ['festivals'];

  it('should create model', function (done) {

    var festivalsCollectionModel = new festivalsCollection.FestivalsCollection(
      total,
      festivals
    );

    should.exist(festivalsCollectionModel);
    festivalsCollectionModel.total.should.be.equal(total);
    festivalsCollectionModel.festivals.should.be.equal(festivals);

    done();
  });

  it('should create model by builder', function (done) {

    var festivalsCollectionModel = new festivalsCollection.FestivalsCollectionBuilder()
      .withTotal(total)
      .withFestivals(festivals)
      .build();

    should.exist(festivalsCollectionModel);
    festivalsCollectionModel.total.should.be.equal(total);
    festivalsCollectionModel.festivals.should.be.equal(festivals);

    done();
  });

});