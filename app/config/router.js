'use strict';
angular.module('app.config.router', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);