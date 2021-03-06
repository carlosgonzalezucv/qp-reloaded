(function () {
  'use strict';  
  angular.module('inspinia')
    .controller('PerformanceController', [
      '$state', 
      PerformanceCtrl
    ]);  
  /** @ngInject */
  function PerformanceCtrl($state) {
    var vm = this, baseState = "index.performance";
    vm.navButtons = [{
        title: "RESUMEN",
        target: baseState + ".graph"
      },{
        title: "EVALUACION_GENERAL",
        target: baseState + ".general",
      },{
        title: "DISEÑO_RESPONSIVE",
        target: baseState + ".responsive",
      },{
        title: "P_ORGANICO",
        target: baseState + ".organico",
      }];
    $state.go('index.performance.graph');
    vm.showDataDetails = showDataDetails;
    vm.dataSet = new Array(4).fill(0).map(function(e, i) {
      var aux = {};
      aux.title = 'Estadistica ' + (++i);
      aux.data = new Array(50).fill(0).map(Math.random);
      aux.total = aux.data.reduce(function(a,b){ return a+b }).toFixed(0);
      return aux;
    });
    vm.demo4Options = {
      type: 'line',
      width: '100%',
      height: '100',
      lineColor: 'rgba(0, 130, 244, 0.8)',
      fillColor: "#ffffff"
    };
    function showDataDetails (data) {
      alert ('Los detalles de la data son', data)
    }
  }  
})();