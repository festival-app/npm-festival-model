var EventCategory = function EventCategory(id, name, breadcrumbs) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
};

var EventCategoryBuilder = function EventCategoryBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function (breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };

  this.build = function () {
    return new EventCategory(
      self.id,
      self.name,
      self.breadcrumbs
    );
  };

};

module.exports = exports = {
  EventCategory: EventCategory,
  EventCategoryBuilder: EventCategoryBuilder
};