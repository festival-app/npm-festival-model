var chai = require('chai');
var should = chai.should();
var EventStatusEnum = require('../../lib/model/eventStatusEnum').EventStatusEnum;

describe('country enum test', function () {

  it('should get CREATED from enum', function (done) {

    var enumValue = EventStatusEnum.getStatus('CREATED');

    should.exist(enumValue);
    enumValue.should.be.equal('CREATED');

    done();
  });

  it('should return null for unknown enum', function (done) {

    var enumValue = EventStatusEnum.getStatus('unknown');

    should.not.exist(enumValue);

    done();
  });


});