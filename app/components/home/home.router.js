angular.module('app.components.home', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'components/home/home.html'
  });
});