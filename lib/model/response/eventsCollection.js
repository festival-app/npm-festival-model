var EventsCollection = function EventsCollection(total, events) {
  this.total = total;
  this.events = events;
};

var EventsCollectionBuilder = function EventsCollectionBuilder() {
  this.total = null;
  this.events = null;

  var self = this;

  this.withTotal = function (total) {
    self.total = total;
    return self;
  };

  this.withEvents = function (events) {
    self.events = events;
    return self;
  };

  this.build = function () {
    return new EventsCollection(
      self.total,
      self.events
    );
  };

};

module.exports = exports = {
  EventsCollection: EventsCollection,
  EventsCollectionBuilder: EventsCollectionBuilder
};