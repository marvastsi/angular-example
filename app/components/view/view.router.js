angular.module('app.components.view', [
  'app.components.ViewController'
])
.config(function ($routeProvider) {
  
  $routeProvider.when('/view', {
    controller: 'ViewController',
    controllerAs: 'vc',
    templateUrl: 'components/view/view.html'
  });

});