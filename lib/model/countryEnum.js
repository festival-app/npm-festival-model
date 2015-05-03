var logger = require('../logger/logger').logger;

module.exports.CountryEnum = {
  PL: 'PL',
  UNKNOWN: 'UNKNOWN',

  getCountry: function (type) {

    if (!this.hasOwnProperty(type)) {
      logger.warn('CountryEnum.getCountry: Unable to get type from "' + type + '"');

      return null;
    }

    return module.exports.CountryEnum[type];
  }
};
