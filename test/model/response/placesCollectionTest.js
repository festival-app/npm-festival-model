var chai = require('chai');
var should = chai.should();
var placesCollection = require('../../../lib/model/response/placesCollection');

describe('places collection model test', function () {

  var total = 11;
  var places = ['places'];

  it('should create model', function (done) {

    var placesCollectionModel = new placesCollection.PlacesCollection(
      total,
      places
    );

    should.exist(placesCollectionModel);
    placesCollectionModel.total.should.be.equal(total);
    placesCollectionModel.places.should.be.equal(places);

    done();
  });

  it('should create model by builder', function (done) {

    var placesCollectionModel = new placesCollection.PlacesCollectionBuilder()
      .withTotal(total)
      .withPlaces(places)
      .build();

    should.exist(placesCollectionModel);
    placesCollectionModel.total.should.be.equal(total);
    placesCollectionModel.places.should.be.equal(places);

    done();
  });

});