/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model.js';

Post.find({}).removeAsync()
  .then(function() {
    Post.create({
        title: 'malax, technology stack',
        author: 'franco',
        body: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.',
        meta: 'first article, about blog, technology stack',
        visible: true
    });
    Post.create({
        title: 'what\'s next',
        author: 'franco',
        body: 'Working with ES6',
        meta: 'future, about blog, technology stack',
        visible: true
    });
  });

