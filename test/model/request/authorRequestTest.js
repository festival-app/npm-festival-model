var chai = require('chai');
var should = chai.should();
var authorRequest = require('../../../lib/model/request/authorRequest');

describe('authorRequest model test', function () {

  var name = 'name';
  var organization = 'organization';

  it('should create model', function (done) {

    var authorRequestModel = new authorRequest.AuthorRequest(
      name, 
      organization
    );

    should.exist(authorRequestModel);
    authorRequestModel.name.should.be.equal(name);
    authorRequestModel.organization.should.be.equal(organization);
    done();
  });

  it('should create model by builder', function (done) {

    var authorRequestModel = new authorRequest.AuthorRequestBuilder()
      .withName(name)
      .withOrganization(organization)
      .build();

    should.exist(authorRequestModel);
    authorRequestModel.name.should.be.equal(name);
    authorRequestModel.organization.should.be.equal(organization);
    done();
  });

});
