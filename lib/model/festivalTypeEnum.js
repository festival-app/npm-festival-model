var logger = require('../logger/logger').logger;

module.exports.FestivalTypeEnum = {
  FANTASY: 'FANTASY',
  WOODSTOCK: 'WOODSTOCK',
  MUSIC: 'MUSIC',

  getType: function (type) {

    if (!this.hasOwnProperty(type)) {
      logger.warn('FestivalTypeEnum.getType: Unable to get type from "' + type + '"');

      return null;
    }

    return module.exports.FestivalTypeEnum[type];
  }
};
