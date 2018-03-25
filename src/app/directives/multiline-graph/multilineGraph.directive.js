(function() {
  'use strict';
  angular.module('inspinia').directive('multilineGraph', multilineGraph);

  function multilineGraph () {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        id: '@'
      },
      template: `
        <div id={{id}}></div>
      `,
      controller: 'MultilineGraphController',
      controllerAs: 'vm'
    }
  }
})();