(function () {
  'use strict';  
  angular.module('inspinia')
    .controller('PerformanceController', [
      '$state', 
      PerformanceCtrl
    ]);  
  /** @ngInject */
  function PerformanceCtrl($state) {
    var vm = this;
    $state.go('index.performance.graph');
  }  
})();