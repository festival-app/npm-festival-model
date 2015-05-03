var EventNotFoundError = function EventNotFoundError(message) {
  Error.call(this);
  this.name = 'EventNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrane wydarzenie nie istnieje';
};

module.exports.EventNotFoundError = EventNotFoundError;

EventNotFoundError.prototype = Object.create(Error.prototype);
EventNotFoundError.prototype.constructor = EventNotFoundError;