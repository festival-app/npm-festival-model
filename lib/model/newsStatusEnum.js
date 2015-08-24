var logger = require('../logger/logger').logger;

module.exports.NewsStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',

  getStatus: function (type) {

    if (!this.hasOwnProperty(type)) {
      logger.warn('NewsStatusEnum.getStatus: Unable to get status from "' + type + '"');

      return null;
    }

    return module.exports.NewsStatusEnum[type];
  }
};
