var chai = require('chai');
var should = chai.should();
var NewsStatusEnum = require('../../lib/model/newsStatusEnum').NewsStatusEnum;

describe('country enum test', function () {

  it('should get CANCELED from enum', function (done) {

    var enumValue = NewsStatusEnum.getStatus('CANCELED');

    should.exist(enumValue);
    enumValue.should.be.equal('CANCELED');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = NewsStatusEnum.getStatus('unknown');

    should.not.exist(enumValue);

    done();
  });


});