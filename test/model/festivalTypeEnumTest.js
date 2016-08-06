var chai = require('chai');
var should = chai.should();
var FestivalTypeEnum = require('../../lib/model/festivalTypeEnum').FestivalTypeEnum;

describe('festival type enum test', function () {

  it('should get MUSIC from enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('MUSIC');

    should.exist(enumValue);
    enumValue.should.be.equal('MUSIC');

    done();
  });

  it('should get FANTASY from enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('FANTASY');

    should.exist(enumValue);
    enumValue.should.be.equal('FANTASY');

    done();
  });

  it('should get MOBILIZATION from enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('MOBILIZATION');

    should.exist(enumValue);
    enumValue.should.be.equal('MOBILIZATION');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = FestivalTypeEnum.getType('unknown');

    should.not.exist(enumValue);

    done();
  });


});