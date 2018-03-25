(function () {
    'use strict';
    angular.module('inspinia').config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
      .state('index.monitores', {
        url: '/monitores', 
        title: 'Monitores',
        templateUrl: 'app/services/monitores/monitores.html',
        controller: 'MonitoresController',
        controllerAs: 'vm',
        sidebarMeta: {
          icon: 'fa-server',
          order: 800,
        },
      })
      .state('index.monitores.general', {
        url: '/general',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/general/monitores.general.html',
        controller: 'GeneralMonitoresController',
        controllerAs: 'vm'
      })
      .state('index.monitores.servidor', {
        url: '/servidor',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/servidor/monitores.servidor.html',
        controller: 'ServidorMonitoresController',
        controllerAs: 'vm'
      })
      .state('index.monitores.blacklist', {
        url: '/blacklist',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/blacklist/monitores.blacklist.html',
        controller: 'BlackListMonitoresController',
        controllerAs: 'vm'
      })
      .state('index.monitores.correos', {
        url: '/correos',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/correos/monitores.correos.html',
        controller: 'CorreosMonitoresController',
        controllerAs: 'vm'
      })
      .state('index.monitores.dns', {
        url: '/dns',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/dns/monitores.dns.html',
        controller: 'DnsMonitoresController',
        controllerAs: 'vm'
      })
      .state('index.monitores.conectividad', {
        url: '/conectividad',
        title: 'Monitores',
        templateUrl: 'app/services/monitores/conectividad/monitores.conectividad.html',
        controller: 'ConectividadMonitoresController',
        controllerAs: 'vm'
      });
    }  
  })();
    
    