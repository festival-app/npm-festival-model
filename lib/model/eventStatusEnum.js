var logger = require('../logger/logger').logger;

module.exports.EventStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',
  MOVED: 'MOVED',

  getStatus: function (status) {
    if (!this.hasOwnProperty(status)) {
      logger.warn('EventStatusEnum.getStatus: Unable to get status from "' + status + '"');

      return null;
    }

    return module.exports.EventStatusEnum[status];
  }
};
