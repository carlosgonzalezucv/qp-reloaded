(function () {
    'use strict';
    angular.module('inspinia').config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
      .state('index.information', {
        url: '/information',
        title: 'Información',
        templateUrl: 'app/information/information.html',
        controller: 'InformationCtrl',
        controllerAs: 'vm'
      });
    }
  })();
    