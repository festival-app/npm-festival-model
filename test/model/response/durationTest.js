var chai = require('chai');
var should = chai.should();
var duration = require('../../../lib/model/response/duration');

describe('duration model test', function () {

  var startAt = 'startAt';
  var finishAt = 'finishAt';
  var periodMs = 28000;

  it('should create model', function (done) {

    var durationModel = new duration.Duration(
      startAt,
      finishAt,
      periodMs
    );

    should.exist(durationModel);
    durationModel.startAt.should.be.equal(startAt);
    durationModel.finishAt.should.be.equal(finishAt);
    durationModel.periodMs.should.be.equal(periodMs);

    done();
  });

  it('should create model by builder', function (done) {

    var durationModel = new duration.DurationBuilder()
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .withPeriodMs(periodMs)
      .build();

    should.exist(durationModel);
    durationModel.startAt.should.be.equal(startAt);
    durationModel.finishAt.should.be.equal(finishAt);
    durationModel.periodMs.should.be.equal(periodMs);

    done();
  });

});