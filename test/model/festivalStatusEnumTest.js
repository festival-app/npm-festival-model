var chai = require('chai');
var should = chai.should();
var FestivalStatusEnum = require('../../lib/model/festivalStatusEnum').FestivalStatusEnum;

describe('country enum test', function () {

  it('should get CANCELED from enum', function (done) {

    var enumValue = FestivalStatusEnum.getStatus('CANCELED');

    should.exist(enumValue);
    enumValue.should.be.equal('CANCELED');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = FestivalStatusEnum.getStatus('unknown');

    should.not.exist(enumValue);

    done();
  });


});