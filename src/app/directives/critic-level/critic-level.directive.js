(function () {
  'use strict';
  angular.module('inspinia')
      .directive('criticLevel', criticLevel);  
  /** @ngInject */
  function criticLevel() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/critic-level/critic-level.html',
      scope: {
        level: "=?",
      },
      controller: function($scope) {
        var maxRating = 5, level = $scope.level;
        this.stars = new Array(maxRating).fill(0);
      },
      controllerAs: 'vm'
    };
  }
})();