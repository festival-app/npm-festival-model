var ServiceUnavailableError = function ServiceUnavailableError(message) {
  Error.call(this);
  this.name = 'ServiceUnavailableError';
  this.message = message;
};

module.exports.ServiceUnavailableError = ServiceUnavailableError;

ServiceUnavailableError.prototype = Object.create(Error.prototype);
ServiceUnavailableError.prototype.constructor = ServiceUnavailableError;