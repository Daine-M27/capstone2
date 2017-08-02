const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();

const User = require('../models/User');
const Gallery = require('../models/Gallery');
const request = require('request');
const rest = require('restler');
const fs = require('fs')


chai.use(chaiHttp);

describe('User Model', () => {
  it('should create a new user', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;

    UserMock
      .expects('save')
      .yields(null);

    user.save((err) => {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if user is not created', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'ValidationError'
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('ValidationError');
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should not create a user with the unique email', (done) => {
    const UserMock = sinon.mock(User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should find user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedUser = {
      _id: '5700a128bd97c1341d8fb365',
      email: 'test@gmail.com'
    };

    userMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedUser);

    User.findOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      done();
    });
  });

  it('should remove user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = {
      nRemoved: 1
    };

    userMock
      .expects('remove')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    User.remove({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done()
        ;
    });
  });
});


//***********************************************************************************************************
// Gallery API Tests

//adds data to gallery posts


describe('Gallery Model', () => {
  it('should create a new gallery object', (done) => {
      fs.stat("../images/uploads/test.jpg", function(err, stats) {
          restler.post("http://posttestserver.com/post.php", {
              multipart: true,
              data: {
                  "imagetitle": "testtitle",
                  "filename": rest.file("../images/uploads/test.jpg", null, stats.size, null, "image/jpg")
              }
          }).on("complete", function(data) {
              console.log(data);
          });
      });
      done();
  });

  // it('should edit the title and description of a gallery object', (done) => {
  //
  // })
});


