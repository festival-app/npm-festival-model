var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export ServiceUnavailableError error', function (done) {

    var ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export Car model', function (done) {

    var festival = index.model.festival;
    should.exist(festival);
    should.exist(festival.Festival);
    should.exist(festival.FestivalBuilder);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});