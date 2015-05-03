var meta = require('./lib/meta');

module.exports = {

  error: {
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError,
  },
  model: {
    /**
     * the searchFestivalsRequest model and builder.
     * @property searchFestivalsRequest
     * @type searchFestivalsRequest
     * @static
     */
    searchFestivalsRequest: require('./lib/model/searchFestivalsRequest'),

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
    place: require('./lib/model/response/place')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


