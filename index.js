var meta = require('./lib/meta');

module.exports = {

  error: {
    FestivalEventNotFoundError: require('./lib/error/festivalEventNotFoundError').FestivalEventNotFoundError,
    FestivalPlaceNotFoundError: require('./lib/error/festivalPlaceNotFoundError').FestivalPlaceNotFoundError,
    FestivalCategoryNotFoundError: require('./lib/error/festivalCategoryNotFoundError').FestivalCategoryNotFoundError,
    FestivalNotFoundError: require('./lib/error/festivalNotFoundError').FestivalNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError
  },
  model: {
    /**
     * the countryEnum model and builder.
     * @property countryEnum
     * @type countryEnum
     * @static
     */
    countryEnum: require('./lib/model/countryEnum'),

    /**
     * the searchFestivalsRequest model and builder.
     * @property searchFestivalsRequest
     * @type searchFestivalsRequest
     * @static
     */
    searchFestivalsRequest: require('./lib/model/searchFestivalsRequest'),

    /**
     * the searchFestivalEventsRequest model and builder.
     * @property searchFestivalEventsRequest
     * @type searchFestivalEventsRequest
     * @static
     */
    searchFestivalEventsRequest: require('./lib/model/searchFestivalEventsRequest'),

    /**
     * the searchFestivalPlacesRequest model and builder.
     * @property searchFestivalPlacesRequest
     * @type searchFestivalPlacesRequest
     * @static
     */
    searchFestivalPlacesRequest: require('./lib/model/searchFestivalPlacesRequest'),

    /**
     * the searchFestivalCategoriesRequest model and builder.
     * @property searchFestivalCategoriesRequest
     * @type searchFestivalCategoriesRequest
     * @static
     */
    searchFestivalCategoriesRequest: require('./lib/model/searchFestivalCategoriesRequest'),

    /**
     * the duration model and builder.
     * @property duration
     * @type duration
     * @static
     */
    duration: require('./lib/model/response/duration'),

    /**
     * the event model and builder.
     * @property event
     * @type event
     * @static
     */
    event: require('./lib/model/response/event'),

    /**
     * the events collection model and builder.
     * @property event collection
     * @type event collection
     * @static
     */
    eventsCollection: require('./lib/model/response/eventsCollection'),

    /**
     * the festival model and builder.
     * @property festival
     * @type festival
     * @static
     */
    festival: require('./lib/model/response/festival'),

    /**
     * the festivalsCollection model and builder.
     * @property festivalsCollection
     * @type festivalsCollection
     * @static
     */
    festivalsCollection: require('./lib/model/response/festivalsCollection'),

    /**
     * the image model and builder.
     * @property image
     * @type image
     * @static
     */
    image: require('./lib/model/response/image'),

    /**
     * the location model and builder.
     * @property location
     * @type location
     * @static
     */
    location: require('./lib/model/response/location'),

    /**
     * the place model and builder.
     * @property place
     * @type place
     * @static
     */
    place: require('./lib/model/response/place'),

    /**
     * the eventPlace model and builder.
     * @property eventPlace
     * @type eventPlace
     * @static
     */
    eventPlace: require('./lib/model/response/eventPlace'),

    /**
     * the placesCollection model and builder.
     * @property placesCollection
     * @type placesCollection
     * @static
     */
    placesCollection: require('./lib/model/response/placesCollection'),

    /**
     * the category model and builder.
     * @property category
     * @type category
     * @static
     */
    category: require('./lib/model/response/category'),

    /**
     * the eventCategory model and builder.
     * @property eventCategory
     * @type eventCategory
     * @static
     */
    eventCategory: require('./lib/model/response/eventCategory'),

    /**
     * the categoriesCollection model and builder.
     * @property categoriesCollection
     * @type categoriesCollection
     * @static
     */
    categoriesCollection: require('./lib/model/response/categoriesCollection')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


