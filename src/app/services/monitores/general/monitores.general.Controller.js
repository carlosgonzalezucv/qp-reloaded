(function(){
  'use strict';
  angular.module('inspinia')
    .controller('GeneralMonitoresController', GeneralMonitoresCtrl);

  function GeneralMonitoresCtrl () {
    var vm = this;  
    vm.generalEvaluation = 10;
    vm.criticLevel = 3;
    vm.serverPanelVisible = false;
    vm.panels = {
      serverState: true ,
      blackList: true
    };
    vm.addMonitor = addMonitor;
    vm.removeMonitor = removeMonitor;
    vm.showContent = showContent;
    vm.serverState = [{
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
    vm.blackList = [...vm.serverState];
    //
    function showServerPanel (id){
      vm.panels[id] = !vm.panels[id];
    }
    function addMonitor (id) {
      if(!vm[id]) 
        vm[id] = [];
      vm[id].push({
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
    function removeMonitor (id, i) {
      vm[id].splice(i, 1);
    }
    function showContent(id) {
      showServerPanel(id);
      // if (!vm.panels[id]) {
      //   $("#" + id).addClass('fadeOutRight');
      // } else {
      //   $("#" + id).removeClass('fadeOutRight');
      // }
      return ;
    }
  }
})();