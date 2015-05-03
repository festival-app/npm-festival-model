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
     * the festival model and builder.
     * @property festival
     * @type festival
     * @static
     */
    festival: require('./lib/model/response/festival')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


