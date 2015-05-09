var CategoriesCollection = function CategoriesCollection(total, categories) {
  this.total = total;
  this.categories = categories;
};

var CategoriesCollectionBuilder = function CategoriesCollectionBuilder() {
  this.total = null;
  this.categories = null;

  var self = this;

  this.withTotal = function (total) {
    self.total = total;
    return self;
  };

  this.withCategories = function (categories) {
    self.categories = categories;
    return self;
  };

  this.build = function () {
    return new CategoriesCollection(
      self.total,
      self.categories
    );
  };

};

module.exports = exports = {
  CategoriesCollection: CategoriesCollection,
  CategoriesCollectionBuilder: CategoriesCollectionBuilder
};