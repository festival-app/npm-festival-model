module.exports.EventStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',
  MOVED: 'MOVED',

  getStatus: function (status) {

    if (!this.hasOwnProperty(status)) {
      return null;
    }

    return module.exports.EventStatusEnum[status];
  }
};
