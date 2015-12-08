'use strict';

var app = require('../..');
var request = require('supertest');

var newThing;

describe('Post API:', function() {

  describe('GET /api/things', function() {
    var things;

    beforeEach(function(done) {
      request(app)
        .get('/api/things')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      things.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/things', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/things')
        .send({
          name: 'New Post',
          info: 'This is the brand new post!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newThing = res.body;
          done();
        });
    });

    it('should respond with the newly created post', function() {
      newThing.name.should.equal('New Post');
      newThing.info.should.equal('This is the brand new post!!!');
    });

  });

  describe('GET /api/things/:id', function() {
    var thing;

    beforeEach(function(done) {
      request(app)
        .get('/api/things/' + newThing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          thing = res.body;
          done();
        });
    });

    afterEach(function() {
      thing = {};
    });

    it('should respond with the requested post', function() {
      thing.name.should.equal('New Post');
      thing.info.should.equal('This is the brand new post!!!');
    });

  });

  describe('PUT /api/things/:id', function() {
    var updatedThing

    beforeEach(function(done) {
      request(app)
        .put('/api/things/' + newThing._id)
        .send({
          name: 'Updated Post',
          info: 'This is the updated post!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedThing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedThing = {};
    });

    it('should respond with the updated post', function() {
      updatedThing.name.should.equal('Updated Post');
      updatedThing.info.should.equal('This is the updated post!!!');
    });

  });

  describe('DELETE /api/things/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when post does not exist', function(done) {
      request(app)
        .delete('/api/things/' + newThing._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
