(function () {
  'use strict';
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('index.performance', {
      url: '/performance', 
      title: 'Performance',
      templateUrl: 'app/services/performance/performance.html',
      controller: 'PerformanceController',
      controllerAs: 'vm',
      sidebarMeta: {
        icon: 'fa-bar-chart',
        order: 800
      }
    })
    .state('index.performance.general', {
      url: '/general',
      title: 'Performance',
      templateUrl: 'app/services/performance/general/performance.general.html',
      controller: 'GeneralPerformanceController',
      controllerAs: 'vm'
    })
    .state('index.performance.organico', {
      url: '/organic',
      title: 'Performance',
      templateUrl: 'app/services/performance/organico/performance.organico.html',
      controller: 'OrganicPerformanceController',
      controllerAs: 'vm'
    })
    .state('index.performance.responsive', {
      url: '/responsive',
      title: 'Performance',
      templateUrl: 'app/services/performance/responsive/performance.responsive.html',
      controller: 'ResponsivePerformanceController',
      controllerAs: 'vm'
    })
    .state('index.performance.graph', {
      url: '/graph',
      title: 'Performance',
      templateUrl: 'app/services/performance/graph/graph.html'
    });
  }  
})();
  
  