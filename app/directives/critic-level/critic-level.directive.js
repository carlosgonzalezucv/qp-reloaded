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
        var remain = maxRating - level;
        this.stars = new Array(maxRating).fill(0);
        this.rating = this.stars.map(function(e, i){ 
          return (
            (i < level) ? '<i class="fa fa-star" style="color: rgb(255,128,123)"></i>': 
                        '<i class="fa fa-star" style="color: rgba(255,128,123,.4)"></i>'
          )
        }).join('');
      },
      controllerAs: 'vm'
    };
  }
})();