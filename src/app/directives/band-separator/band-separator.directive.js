(function(){
  'use strict';
  angular.module('inspinia')
    .directive('bandSeparator', bandSeparator);
    /** @ngInject */
  function bandSeparator () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        addMonitor: '=',
        showContent: '=',
        childId: '@chid'
      },
      templateUrl: 'app/directives/band-separator/band-separator.html',
      controller: function($scope) {
        var vm = this;
      },
      controllerAs: 'vm'
    }
  }
})();