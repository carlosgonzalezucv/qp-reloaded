(function () {
    'use strict';  
    angular.module('inspinia').controller('OrganicPerformanceController', OrganicPerformanceCtrl);  
    /** @ngInject */
    /*
        Controlador para mostrar los resultados del performance organico 
    */
    function OrganicPerformanceCtrl() {
      var vm = this;
      vm.generalEvaluation = "20";
      vm.criticLevel = 1;
    }  
  })();