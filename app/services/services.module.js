(function () {
  'use strict';
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('services', {
      url: '/services',
      title: 'Servicios',
      templateUrl: 'app/pages/services/services.html'
      // controller: 'ServicesCtrl',
      // controllerAs: 'vm',
      
    });
  }
})();
  