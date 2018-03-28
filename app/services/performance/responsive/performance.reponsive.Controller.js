(function () {
  'use strict';  
  angular.module('inspinia').controller('ResponsivePerformanceController', ResponsivePerformanceCtrl);  
  /** @ngInject */
  /*
      Controlador para mostrar los resultados del performance organico 
  */
  function ResponsivePerformanceCtrl() {
    var vm = this;
    vm.generalEvaluation = "90";
    vm.criticLevel = 0;
  }  
})();