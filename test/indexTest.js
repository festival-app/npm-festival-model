var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export ServiceUnavailableError error', function (done) {

    var ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export FestivalEventNotFoundError error', function (done) {

    var FestivalEventNotFoundError = index.error.FestivalEventNotFoundError;
    should.exist(FestivalEventNotFoundError);
    done();
  });

  it('should export FestivalPlaceNotFoundError error', function (done) {

    var FestivalPlaceNotFoundError = index.error.FestivalPlaceNotFoundError;
    should.exist(FestivalPlaceNotFoundError);
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

  it('should export searchFestivalEventsRequest', function (done) {

    var searchFestivalEventsRequest = index.model.searchFestivalEventsRequest;
    should.exist(searchFestivalEventsRequest);
    should.exist(searchFestivalEventsRequest.SearchFestivalEventsRequest);
    should.exist(searchFestivalEventsRequest.SearchFestivalEventsRequestBuilder);
    done();
  });

  it('should export searchFestivalPlacesRequest', function (done) {

    var searchFestivalPlacesRequest = index.model.searchFestivalPlacesRequest;
    should.exist(searchFestivalPlacesRequest);
    should.exist(searchFestivalPlacesRequest.SearchFestivalPlacesRequest);
    should.exist(searchFestivalPlacesRequest.SearchFestivalPlacesRequestBuilder);
    done();
  });

  it('should export searchFestivalCategoriesRequest', function (done) {

    var searchFestivalCategoriesRequest = index.model.searchFestivalCategoriesRequest;
    should.exist(searchFestivalCategoriesRequest);
    should.exist(searchFestivalCategoriesRequest.SearchFestivalCategoriesRequest);
    should.exist(searchFestivalCategoriesRequest.SearchFestivalCategoriesRequestBuilder);
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

  it('should export image', function (done) {

    var image = index.model.image;
    should.exist(image);
    should.exist(image.Image);
    should.exist(image.ImageBuilder);
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

  it('should export places collection', function (done) {

    var placesCollection = index.model.placesCollection;
    should.exist(placesCollection);
    should.exist(placesCollection.PlacesCollection);
    should.exist(placesCollection.PlacesCollectionBuilder);
    done();
  });

  it('should export category collection', function (done) {

    var category = index.model.category;
    should.exist(category);
    should.exist(category.Category);
    should.exist(category.CategoryBuilder);
    done();
  });

  it('should export categories collection', function (done) {

    var categoriesCollection = index.model.categoriesCollection;
    should.exist(categoriesCollection);
    should.exist(categoriesCollection.CategoriesCollection);
    should.exist(categoriesCollection.CategoriesCollectionBuilder);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});