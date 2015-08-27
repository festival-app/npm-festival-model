var chai = require('chai');
var should = chai.should();
var FestivalTypeEnum = require('../../lib/model/festivalTypeEnum').FestivalTypeEnum;

describe('country enum test', function () {

  it('should get MUSIC from enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('MUSIC');

    should.exist(enumValue);
    enumValue.should.be.equal('MUSIC');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('unknown');

    should.not.exist(enumValue);

    done();
  });


});