(function () {
  'use strict';  
  angular.module('inspinia').controller('InformationCtrl', InformationCtrl);  
  /** @ngInject */
  function InformationCtrl() {
    var vm = this;
    vm.titles = {
      performance: "Performance",
      components: "Componentes instalados",
      tools: "Herramientas",
      server: "Servidor y monitores"
    };
    vm.icons = {
      performance: "fa-bar-chart",
      components: "fa-puzzle-piece",
      tools: "fa-code",
      server: "fa-server"
    };
    vm.descriptions = {
      performance: "Agrega una descripcion para <strong>performance</strong>",
      components: "Agrega una descripcion para <strong>components</strong>",
      tools: "Agrega una descripcion para <strong>tools</strong>",
      server: "Agrega una descripcion para <strong>server</strong>"
    }
  }  
})();