var FestivalNotFoundError = function FestivalNotFoundError(message) {
  Error.call(this);
  this.name = 'FestivalNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrany festival nie istnieje';
};

module.exports.FestivalNotFoundError = FestivalNotFoundError;

FestivalNotFoundError.prototype = Object.create(Error.prototype);
FestivalNotFoundError.prototype.constructor = FestivalNotFoundError;