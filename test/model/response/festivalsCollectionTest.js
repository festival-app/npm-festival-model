var chai = require('chai');
var should = chai.should();
var festivalsCollection = require('../../../lib/model/response/festivalsCollection');

describe('festivals collection model test', function () {

  var count = 'count';
  var festivals = ['festivals'];

  it('should create model', function (done) {

    var festivalsCollectionModel = new festivalsCollection.FestivalsCollection(
      count,
      festivals
    );

    should.exist(festivalsCollectionModel);
    festivalsCollectionModel.count.should.be.equal(count);
    festivalsCollectionModel.festivals.should.be.equal(festivals);

    done();
  });

  it('should create model by builder', function (done) {

    var festivalsCollectionModel = new festivalsCollection.FestivalsCollectionBuilder()
      .withCount(count)
      .withFestivals(festivals)
      .build();

    should.exist(festivalsCollectionModel);
    festivalsCollectionModel.count.should.be.equal(count);
    festivalsCollectionModel.festivals.should.be.equal(festivals);

    done();
  });

});