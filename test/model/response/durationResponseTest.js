var chai = require('chai');
var should = chai.should();
var durationResponse = require('../../../lib/model/response/durationResponse');

describe('durationResponse model test', function () {

  var startAt = 'startAt';
  var finishAt = 'finishAt';
  var periodMs = 'periodMs';

  it('should create model', function (done) {

    var durationResponseModel = new durationResponse.DurationResponse(
      startAt, 
      finishAt, 
      periodMs
    );

    should.exist(durationResponseModel);
    durationResponseModel.startAt.should.be.equal(startAt);
    durationResponseModel.finishAt.should.be.equal(finishAt);
    durationResponseModel.periodMs.should.be.equal(periodMs);
    done();
  });

  it('should create model by builder', function (done) {

    var durationResponseModel = new durationResponse.DurationResponseBuilder()
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .withPeriodMs(periodMs)
      .build();

    should.exist(durationResponseModel);
    durationResponseModel.startAt.should.be.equal(startAt);
    durationResponseModel.finishAt.should.be.equal(finishAt);
    durationResponseModel.periodMs.should.be.equal(periodMs);
    done();
  });

});
