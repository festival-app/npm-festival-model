var logger = require('../logger/logger').logger;

module.exports.CountryEnum = {
  PL: 'PL',
  UNKNOWN: 'UNKNOWN',

  getCountry: function (country) {

    if (!this.hasOwnProperty(country)) {
      logger.warn('CountryEnum.getCountry: Unable to get country from "' + country + '"');

      return null;
    }

    return module.exports.CountryEnum[country];
  }
};
