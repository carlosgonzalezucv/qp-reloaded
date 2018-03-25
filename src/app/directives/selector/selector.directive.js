(function () {
    'use strict';
  
    angular.module('inspinia')
        .directive('selector', selector);
  
    /** @ngInject */
    function selector() {
      return {
        restrict: 'E',
        templateUrl: 'app/directives/selector/selector.html',
        scope: {
            title: "=?",
            icon: "=?",
            description: "=?",
            target: "@"
        },
        controller: 'SelectorController',
        controllerAs: 'vm'
      };
    }
  })();