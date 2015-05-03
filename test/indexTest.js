var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export ServiceUnavailableError error', function (done) {

    var ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export EventNotFoundError error', function (done) {

    var EventNotFoundError = index.error.EventNotFoundError;
    should.exist(EventNotFoundError);
    done();
  });

  it('should export EventPlaceNotFoundError error', function (done) {

    var EventPlaceNotFoundError = index.error.EventPlaceNotFoundError;
    should.exist(EventPlaceNotFoundError);
    done();
  });

  it('should export FestivalNotFoundError error', function (done) {

    var FestivalNotFoundError = index.error.FestivalNotFoundError;
    should.exist(FestivalNotFoundError);
    done();
  });

  it('should export searchFestivalsRequest', function (done) {

    var searchFestivalsRequest = index.model.searchFestivalsRequest;
    should.exist(searchFestivalsRequest);
    should.exist(searchFestivalsRequest.SearchFestivalsRequest);
    should.exist(searchFestivalsRequest.SearchFestivalsRequestBuilder);
    done();
  });

  it('should export duration', function (done) {

    var duration = index.model.duration;
    should.exist(duration);
    should.exist(duration.Duration);
    should.exist(duration.DurationBuilder);
    done();
  });

  it('should export eventsCollection', function (done) {

    var eventsCollection = index.model.eventsCollection;
    should.exist(eventsCollection);
    should.exist(eventsCollection.EventsCollection);
    should.exist(eventsCollection.EventsCollectionBuilder);
    done();
  });

  it('should export event', function (done) {

    var event = index.model.event;
    should.exist(event);
    should.exist(event.Event);
    should.exist(event.EventBuilder);
    done();
  });

  it('should export festival model', function (done) {

    var festival = index.model.festival;
    should.exist(festival);
    should.exist(festival.Festival);
    should.exist(festival.FestivalBuilder);
    done();
  });

  it('should export festivalsCollection', function (done) {

    var festivalsCollection = index.model.festivalsCollection;
    should.exist(festivalsCollection);
    should.exist(festivalsCollection.FestivalsCollection);
    should.exist(festivalsCollection.FestivalsCollectionBuilder);
    done();
  });

  it('should export location', function (done) {

    var location = index.model.location;
    should.exist(location);
    should.exist(location.Location);
    should.exist(location.LocationBuilder);
    done();
  });

  it('should export place', function (done) {

    var place = index.model.place;
    should.exist(place);
    should.exist(place.Place);
    should.exist(place.PlaceBuilder);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});