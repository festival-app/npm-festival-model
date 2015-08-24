var logger = require('../logger/logger').logger;

module.exports.FestivalStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',

  getStatus: function (status) {

    if (!this.hasOwnProperty(status)) {
      logger.warn('FestivalStatusEnum.getStatus: Unable to get status from "' + status + '"');

      return null;
    }

    return module.exports.FestivalStatusEnum[status];
  }
};
