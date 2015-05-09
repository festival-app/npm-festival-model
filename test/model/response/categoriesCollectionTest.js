var chai = require('chai');
var should = chai.should();
var categoriesCollection = require('../../../lib/model/response/categoriesCollection');

describe('categories collection model test', function () {

  var total = 11;
  var categories = ['categories'];

  it('should create model', function (done) {

    var categoriesCollectionModel = new categoriesCollection.CategoriesCollection(
      total,
      categories
    );

    should.exist(categoriesCollectionModel);
    categoriesCollectionModel.total.should.be.equal(total);
    categoriesCollectionModel.categories.should.be.equal(categories);

    done();
  });

  it('should create model by builder', function (done) {

    var categoriesCollectionModel = new categoriesCollection.CategoriesCollectionBuilder()
      .withTotal(total)
      .withCategories(categories)
      .build();

    should.exist(categoriesCollectionModel);
    categoriesCollectionModel.total.should.be.equal(total);
    categoriesCollectionModel.categories.should.be.equal(categories);

    done();
  });

});