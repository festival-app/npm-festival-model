var EventsCollection = function EventsCollection(count, events) {
  this.count = count;
  this.events = events;
};

var EventsCollectionBuilder = function EventsCollectionBuilder() {
  this.count = null;
  this.events = null;

  var self = this;

  this.withCount = function (count) {
    self.count = count;
    return self;
  };

  this.withEvents = function (events) {
    self.events = events;
    return self;
  };

  this.build = function () {
    return new EventsCollection(
      self.count,
      self.events
    );
  };

};

module.exports = exports = {
  EventsCollection: EventsCollection,
  EventsCollectionBuilder: EventsCollectionBuilder
};