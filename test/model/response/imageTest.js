var chai = require('chai');
var should = chai.should();
var image = require('../../../lib/model/response/image');

describe('image model test', function () {

  var small = 'small';
  var medium = 'medium';
  var large = 'large';

  it('should create model', function (done) {

    var imageModel = new image.Image(
      small,
      medium,
      large
    );

    should.exist(imageModel);
    imageModel.small.should.be.equal(small);
    imageModel.medium.should.be.equal(medium);
    imageModel.large.should.be.equal(large);

    done();
  });

  it('should create model by builder', function (done) {

    var imageModel = new image.ImageBuilder()
      .withSmall(small)
      .withMedium(medium)
      .withLarge(large)
      .build();

    should.exist(imageModel);
    imageModel.small.should.be.equal(small);
    imageModel.medium.should.be.equal(medium);
    imageModel.large.should.be.equal(large);

    done();
  });

});