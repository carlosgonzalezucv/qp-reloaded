(function () {
    'use strict';  
    angular.module('inspinia').controller('GeneralPerformanceController', GeneralPerformanceCtrl);  
    /** @ngInject */
    /*
        Controlador para mostrar los resultados del performance general 
    */
    function GeneralPerformanceCtrl() {
      var vm = this;
      vm.generalEvaluation = "40";
      vm.criticLevel = 3;
    }  
  })();