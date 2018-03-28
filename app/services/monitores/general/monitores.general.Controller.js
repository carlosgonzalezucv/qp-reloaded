(function(){
  'use strict';
  angular.module('inspinia')
    .controller('GeneralMonitoresController', GeneralMonitoresCtrl);

  function GeneralMonitoresCtrl () {
    var vm = this;  
    vm.generalEvaluation = 10;
    vm.criticLevel = 3;
    vm.serverPanelVisible = false;
    vm.showServerPanel = showServerPanel;
    vm.addMonitor = addMonitor;
    vm.removeMonitor = removeMonitor;
    vm.serverStates = [{
      url: 'kirlands.com',
      info: 'Disponible desde 05/11/2017',
      status: 'Disponible',
      icon: {
        name: 'fa fa-check',
        color: 'green'
      },
      showDetails: true
    },{
      url: 'example.com',
      info: 'Caido desde hace 4 horas',
      status: 'No disponible',
      icon: {
        name: 'fa fa-times-circle',
        color: 'red'
      },
      showDetails: true
    },{
      url: 'example2.com',
      info: 'Caido desde hace 4 horas',
      status: 'No disponible',
      icon:  {
        name: 'fa fa-times-circle',
        color: 'red'
      },
      showDetails: true
    },{
      url: 'monitor extra',
      info: 'Caido desde hace 0 horas',
      status: 'No disponible',
      icon:  {
        name: 'fa fa-info',
        color: 'yellow'
      },
      showDetails: false
    }];
    //
    function showServerPanel (){
      vm.serverPanelVisible = !vm.serverPanelVisible;
    }
    function addMonitor () {
      vm.serverStates.push({
        url: 'monitor extra',
        info: 'Caido desde hace 0 horas',
        status: 'No disponible',
        icon:  {
          name: 'fa fa-info fa-2x',
          color: 'yellow'
        },
        showDetails: false
      });
    }
    function removeMonitor (i) {
      vm.serverStates.splice(i, 1);
    }
  }
})();