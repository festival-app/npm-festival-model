var chai = require('chai');
var should = chai.should();
var placesCollectionResponse = require('../../../lib/model/response/placesCollectionResponse');

describe('placesCollectionResponse model test', function () {

  var total = 'total';
  var places = 'places';

  it('should create model', function (done) {

    var placesCollectionResponseModel = new placesCollectionResponse.PlacesCollectionResponse(
      total, 
      places
    );

    should.exist(placesCollectionResponseModel);
    placesCollectionResponseModel.total.should.be.equal(total);
    placesCollectionResponseModel.places.should.be.equal(places);
    done();
  });

  it('should create model by builder', function (done) {

    var placesCollectionResponseModel = new placesCollectionResponse.PlacesCollectionResponseBuilder()
      .withTotal(total)
      .withPlaces(places)
      .build();

    should.exist(placesCollectionResponseModel);
    placesCollectionResponseModel.total.should.be.equal(total);
    placesCollectionResponseModel.places.should.be.equal(places);
    done();
  });

});
