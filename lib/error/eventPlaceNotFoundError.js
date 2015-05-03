var EventPlaceNotFoundError = function EventPlaceNotFoundError(message) {
  Error.call(this);
  this.name = 'EventPlaceNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrane miejsce wydarzenia nie istnieje';
};

module.exports.EventPlaceNotFoundError = EventPlaceNotFoundError;

EventPlaceNotFoundError.prototype = Object.create(Error.prototype);
EventPlaceNotFoundError.prototype.constructor = EventPlaceNotFoundError;