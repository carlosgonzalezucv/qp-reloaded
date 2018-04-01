(function () {
  'use strict';
  angular.module('inspinia').directive('sparkline', sparkline);

  function sparkline() {
    return {
      restrict: 'A',
      scope: {
        sparkData: '=',
        sparkOptions: '=',
      },
      link: function (scope, element, attrs) {
        scope.$watch(scope.sparkData, function () {
          render();
        });
        scope.$watch(scope.sparkOptions, function(){
          render();
        });
        var render = function () {
          $(element).sparkline(scope.sparkData, scope.sparkOptions);
        };
      }
    }
  };
})();