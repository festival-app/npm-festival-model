var EventCategoryResponse = function EventCategoryResponse(id, name, breadcrumbs, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var EventCategoryResponseBuilder = function EventCategoryResponseBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.createdAt = null;
  this.updatedAt = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function withBreadcrumbs(breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };

  this.withCreatedAt = function withCreatedAt(createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function withUpdatedAt(updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };


  this.build = function build() {
    return new EventCategoryResponse(
     self.id, 
     self.name, 
     self.breadcrumbs, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = exports = {
  EventCategoryResponse: EventCategoryResponse,
  EventCategoryResponseBuilder: EventCategoryResponseBuilder
};
