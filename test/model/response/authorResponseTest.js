var chai = require('chai');
var should = chai.should();
var authorResponse = require('../../../lib/model/response/authorResponse');

describe('authorResponse model test', function () {

  var name = 'name';
  var organization = 'organization';

  it('should create model', function (done) {

    var authorResponseModel = new authorResponse.AuthorResponse(
      name, 
      organization
    );

    should.exist(authorResponseModel);
    authorResponseModel.name.should.be.equal(name);
    authorResponseModel.organization.should.be.equal(organization);
    done();
  });

  it('should create model by builder', function (done) {

    var authorResponseModel = new authorResponse.AuthorResponseBuilder()
      .withName(name)
      .withOrganization(organization)
      .build();

    should.exist(authorResponseModel);
    authorResponseModel.name.should.be.equal(name);
    authorResponseModel.organization.should.be.equal(organization);
    done();
  });

});
