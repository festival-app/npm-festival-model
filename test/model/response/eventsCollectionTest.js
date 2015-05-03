var chai = require('chai');
var should = chai.should();
var eventsCollection = require('../../../lib/model/response/eventsCollection');

describe('events collection model test', function () {

  var count = 'count';
  var events = ['events'];

  it('should create model', function (done) {

    var eventsCollectionModel = new eventsCollection.EventsCollection(
      count,
      events
    );

    should.exist(eventsCollectionModel);
    eventsCollectionModel.count.should.be.equal(count);
    eventsCollectionModel.events.should.be.equal(events);

    done();
  });

  it('should create model by builder', function (done) {

    var eventsCollectionModel = new eventsCollection.EventsCollectionBuilder()
      .withCount(count)
      .withEvents(events)
      .build();

    should.exist(eventsCollectionModel);
    eventsCollectionModel.count.should.be.equal(count);
    eventsCollectionModel.events.should.be.equal(events);

    done();
  });

});