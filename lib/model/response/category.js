var Category = function Category(id, name, breadcrumbs, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var CategoryBuilder = function CategoryBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.createdAt = null;
  this.updatedAt = null;

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

  this.withCreatedAt = function (createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function (updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };

  this.build = function () {
    return new Category(
      self.id,
      self.name,
      self.breadcrumbs,
      self.createdAt,
      self.updatedAt
    );
  };

};

module.exports = exports = {
  Category: Category,
  CategoryBuilder: CategoryBuilder
};