(function () {
  'use strict';
  angular.module('inspinia')
      .directive('progressBar2', progressBar);  
  /** @ngInject */
  function progressBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/progress-bar/progress-bar.html',
      scope: {
        value: "=?",
        text: "@",
        type: "@"
      }
    };
  }
})();