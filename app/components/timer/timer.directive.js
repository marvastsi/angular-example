 'use strict';
angular.module('app.components.timerDirective', ['app.components.TimerController'])

.directive('currentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
  return {
    link: function (scope, element, attrs) {
      var format, timer;
      function refresh() {
        element.text(dateFilter(new Date(), format));
      };

      scope.$watch(attrs.currentTime, function(dfFormat) {
        format = dfFormat;
        refresh();
      });

      element.on('$destroy', function() {
        $interval.cancel(timer);
      });

      timer = $interval(function() {
        refresh();
      }, 1000);
    }
  };
}])

.directive("docTimer", function() {
  return {
    restrict: 'EA',
    templateUrl: "timer.html",
    controller: 'TimerController',
    controllerAs: 'tm'
  };
});