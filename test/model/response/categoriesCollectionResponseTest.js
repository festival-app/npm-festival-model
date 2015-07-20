var chai = require('chai');
var should = chai.should();
var categoriesCollectionResponse = require('../../../lib/model/response/categoriesCollectionResponse');

describe('categoriesCollectionResponse model test', function () {

  var total = 'total';
  var categories = 'categories';

  it('should create model', function (done) {

    var categoriesCollectionResponseModel = new categoriesCollectionResponse.CategoriesCollectionResponse(
      total, 
      categories
    );

    should.exist(categoriesCollectionResponseModel);
    categoriesCollectionResponseModel.total.should.be.equal(total);
    categoriesCollectionResponseModel.categories.should.be.equal(categories);
    done();
  });

  it('should create model by builder', function (done) {

    var categoriesCollectionResponseModel = new categoriesCollectionResponse.CategoriesCollectionResponseBuilder()
      .withTotal(total)
      .withCategories(categories)
      .build();

    should.exist(categoriesCollectionResponseModel);
    categoriesCollectionResponseModel.total.should.be.equal(total);
    categoriesCollectionResponseModel.categories.should.be.equal(categories);
    done();
  });

});
