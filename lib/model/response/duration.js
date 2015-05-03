var Duration = function Duration(startAt, finishAt, periodMs) {
  this.startAt = startAt;
  this.finishAt = finishAt;
  this.periodMs = periodMs;
};

var DurationBuilder = function DurationBuilder() {
  this.startAt = null;
  this.finishAt = null;
  this.periodMs = null;

  var self = this;

  this.withStartAt = function (startAt) {
    self.startAt = startAt;
    return self;
  };

  this.withFinishAt = function (finishAt) {
    self.finishAt = finishAt;
    return self;
  };

  this.withPeriodMs = function (periodMs) {
    self.periodMs = periodMs;
    return self;
  };

  this.build = function () {
    return new Duration(
      self.startAt,
      self.finishAt,
      self.periodMs
    );
  };

};

module.exports = exports = {
  Duration: Duration,
  DurationBuilder: DurationBuilder
};