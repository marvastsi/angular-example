angular.module('app.components.TimerController', [])

.controller('TimerController', ['$scope', function($scope) {
  $scope.format = 'dd/MM/yyyy HH:mm:ss';// 'dd/MM/yyyy hh:mm:ss a';
}]);