(function() {
  'use strict';
  angular.module('inspinia').directive('cButton', cButton);

  function cButton () {
    console.log("directiva cbutton")
    return {
      restrict: 'E',
      scope: {
        title: '@',
        className: '@cname',
        target: '@'
      },
      templateUrl: 'app/directives/cButton/cButton.html'
    }
  }
})();