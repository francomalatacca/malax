'use strict';

angular.module('malaxApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/post/:id', {
        templateUrl: 'app/post/post.html',
        controller: 'PostController',
        controllerAs: 'post'
      });
  });
