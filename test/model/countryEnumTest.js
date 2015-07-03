var chai = require('chai');
var should = chai.should();
var CountryEnum = require('../../lib/model/countryEnum').CountryEnum;

describe('country enum test', function () {

  it('should get country enum', function (done) {

    var enumValue = CountryEnum.getCountry('PL');

    should.exist(enumValue);
    enumValue.should.be.equal('PL');

    done();
  });

  it('should return null for unknown country enum', function (done) {

    var enumValue = CountryEnum.getCountry('unknown');

    should.not.exist(enumValue);

    done();
  });


});