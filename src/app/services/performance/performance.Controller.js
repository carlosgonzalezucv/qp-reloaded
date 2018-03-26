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
    vm.showDataDetails = showDataDetails;
    vm.dataSet = new Array(4).fill(0).map( (e, i) => {
      let aux = {};
      aux.title = 'Estadistica ' + (++i);
      aux.data = new Array(50).fill(0).map(Math.random);
      aux.total = aux.data.reduce((a,b) => a+b).toFixed(0);
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
      alert ('Los detalles de la data son', data.title)
    }
  }  
})();