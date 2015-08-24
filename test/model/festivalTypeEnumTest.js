var chai = require('chai');
var should = chai.should();
var FestivalTypeEnum = require('../../lib/model/festivalTypeEnum').FestivalTypeEnum;

describe('country enum test', function () {

  it('should get WOODSTOCK from enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('WOODSTOCK');

    should.exist(enumValue);
    enumValue.should.be.equal('WOODSTOCK');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('unknown');

    should.not.exist(enumValue);

    done();
  });


});