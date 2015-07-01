var Category = function Category(id, name, createdAt, updatedAt, parent) {
  this.id = id;
  this.name = name;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.parent = parent;
};

var CategoryBuilder = function CategoryBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.parent = null;

  var self = this;

  this.withId = function (id) {
    self.id = id;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
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

  this.withParent = function (parent) {
    self.parent = parent;
    return self;
  };

  this.build = function () {
    return new Category(
      self.id,
      self.name,
      self.createdAt,
      self.updatedAt,
      self.parent
    );
  };

};

module.exports = exports = {
  Category: Category,
  CategoryBuilder: CategoryBuilder
};