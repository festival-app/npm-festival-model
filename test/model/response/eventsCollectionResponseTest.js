var chai = require('chai');
var should = chai.should();
var eventsCollectionResponse = require('../../../lib/model/response/eventsCollectionResponse');

describe('eventsCollectionResponse model test', function () {

  var total = 'total';
  var events = 'events';

  it('should create model', function (done) {

    var eventsCollectionResponseModel = new eventsCollectionResponse.EventsCollectionResponse(
      total, 
      events
    );

    should.exist(eventsCollectionResponseModel);
    eventsCollectionResponseModel.total.should.be.equal(total);
    eventsCollectionResponseModel.events.should.be.equal(events);
    done();
  });

  it('should create model by builder', function (done) {

    var eventsCollectionResponseModel = new eventsCollectionResponse.EventsCollectionResponseBuilder()
      .withTotal(total)
      .withEvents(events)
      .build();

    should.exist(eventsCollectionResponseModel);
    eventsCollectionResponseModel.total.should.be.equal(total);
    eventsCollectionResponseModel.events.should.be.equal(events);
    done();
  });

});
