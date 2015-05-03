var chai = require('chai');
var should = chai.should();
var eventsCollection = require('../../../lib/model/response/eventsCollection');

describe('events collection model test', function () {

  var total = 11;
  var events = ['events'];

  it('should create model', function (done) {

    var eventsCollectionModel = new eventsCollection.EventsCollection(
      total,
      events
    );

    should.exist(eventsCollectionModel);
    eventsCollectionModel.total.should.be.equal(total);
    eventsCollectionModel.events.should.be.equal(events);

    done();
  });

  it('should create model by builder', function (done) {

    var eventsCollectionModel = new eventsCollection.EventsCollectionBuilder()
      .withTotal(total)
      .withEvents(events)
      .build();

    should.exist(eventsCollectionModel);
    eventsCollectionModel.total.should.be.equal(total);
    eventsCollectionModel.events.should.be.equal(events);

    done();
  });

});