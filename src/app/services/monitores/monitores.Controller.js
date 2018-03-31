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
    var vm = this, baseState = "index.monitores", className = "col-md-2 col-sm-2 col-xs-4";
    vm.cName = className;
    vm.navButtons = [{
      title: "INF_GENERAL",
      target: baseState + ".general"
    },{
      title: "SERVIDORES",
      target: baseState + ".servidor",
    },{
      title: "LISTA_NEGRA",
      target: baseState + ".blacklist",
    },{
      title: "CORREOS",
      target: baseState + ".correos",
    },{
      title: "DNS",
      target: baseState + ".dns",
    },{
      title: "CONECTIVIDAD",
      target: baseState + ".conectividad",
    }];
    $state.go('index.monitores.general')
  }  
})();