var chai = require('chai');
var should = chai.should();
var durationRequest = require('../../../lib/model/request/durationRequest');

describe('durationRequest model test', function () {

  var startAt = 'startAt';
  var finishAt = 'finishAt';

  it('should create model', function (done) {

    var durationRequestModel = new durationRequest.DurationRequest(
      startAt, 
      finishAt
    );

    should.exist(durationRequestModel);
    durationRequestModel.startAt.should.be.equal(startAt);
    durationRequestModel.finishAt.should.be.equal(finishAt);
    done();
  });

  it('should create model by builder', function (done) {

    var durationRequestModel = new durationRequest.DurationRequestBuilder()
      .withStartAt(startAt)
      .withFinishAt(finishAt)
      .build();

    should.exist(durationRequestModel);
    durationRequestModel.startAt.should.be.equal(startAt);
    durationRequestModel.finishAt.should.be.equal(finishAt);
    done();
  });

});
