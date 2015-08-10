angular.module('app.components.timer', ['ngRoute', 'app.components.TimerController'])

.config(function($routeProvider) {
  $routeProvider.when('/timer', {
    templateUrl: 'components/timer/timer.html',
    controller: 'TimerController',
    controllerAs: 'tm'
  });
});