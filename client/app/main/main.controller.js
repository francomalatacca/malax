'use strict';

(function() {

	class MainController {

		constructor($http) {
			this.$http = $http;
			this.Posts = [];

			$http.get('/api/posts').then(response => {
				this.Posts = response.data;
			});
		}

		getPost(id) {
			$http.get('/api/posts/' + id).then(response => {
				this.Posts = response.data;
			});
		}

		addPost() {
			if (this.newPost) {
				this.$http.post('/api/posts', { name: this.newPost });
				this.newPost = '';
			}
		}

		deletePost(post) {
			this.$http.delete('/api/posts/' + post._id);
		}
	}

	angular.module('malaxApp')
		.controller('MainController', MainController);

})();
