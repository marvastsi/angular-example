angular.module('app.components.about', ['ngRoute',
  'app.components.AboutController'
  ])
.config(function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'components/about/about.html',
    controller: 'AboutController',
    controllerAs: 'ac'
  });

});