(function () {
    'use strict';  
    angular
      .module('inspinia')
      .controller('MonitoresController', [
        '$state', 
        PerformanceCtrl
      ]);  
    /** @ngInject */
    function PerformanceCtrl($state) {
      var vm = this;
      $state.go('index.monitores.general')
    }  
  })();