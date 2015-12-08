'use strict';

(function() {

	class PostController {

		constructor($http, $routeParams) {
			this.$http = $http;
			this.$routeParams = $routeParams;
			this.Post = [];

			$http.get('/api/posts/' + this.$routeParams.id).then(response => {
				this.Post = response.data;
			});
		}
	}
  angular.module('malaxApp')
      .controller('PostController',PostController);
})();
