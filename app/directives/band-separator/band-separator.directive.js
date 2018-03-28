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
        addMonitor: '='
      },
      templateUrl: 'app/directives/band-separator/band-separator.html',
      controller: function() {
        var vm = this;
      },
      controllerAs: 'vm'
    }
  }
})();