'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  author: String,
  created: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now  },
  createdBy: String,
  meta: [String],
  active: Boolean
});

PostSchema.pre('save', function(next){
  var post = this;
  post.lastUpdate = Date.now();
  post.meta = (post.meta && post.meta.length > 0) ? post.meta.toString().split(',') : [];
  next();
});

module.exports = mongoose.model('Post', PostSchema);
