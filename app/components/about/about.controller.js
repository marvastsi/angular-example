angular.module('app.components.AboutController', [])
.controller('AboutController', ['$http', function ($http) {
	var ac = this;

	ac.data = $http.get('assets/data/links.json')
	.then(function(response){
			ac.data = response.data;
		},
		function(response){
			console.log(response.data);
		});
  
}]);