(function() {
  'use strict';
  angular
    .module('inspinia')
    .directive('iboxTools', iboxTools);

  Directive.$inject = ['$timeout'];
  function Directive($timeout) {
    var directive = {
      restrict: 'A',
      scope: true,
      template: `
        <div class="ibox-tools" uib-dropdown>
          <a ng-click="showhide()"> <i class="fa fa-chevron-up"></i></a>
          <a href uib-dropdown-toggle>
            <i class="fa fa-wrench"></i>
          </a>
          <ul uib-dropdown-menu>
            <li><a href>Config option 1</a>
            </li>
            <li><a href>Config option 2</a>
            </li>
          </ul>
          <a ng-click="closebox()"><i class="fa fa-times"></i></a>
        </div>
      `,
      controller: Controller
    };
    return directive;
  }
  /* @ngInject */
  function Controller ($scope, $element) {
      // Function for collapse ibox
    $scope.showhide = function () {
      var ibox = $element.closest('div.ibox');
      var icon = $element.find('i:first');
      var content = ibox.children('.ibox-content');
      content.slideToggle(200);
      // Toggle icon from up to down
      icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
      ibox.toggleClass('').toggleClass('border-bottom');
      $timeout(function () {
        ibox.resize();
        ibox.find('[id^=map-]').resize();
      }, 50);
    };
    // Function for close ibox
    $scope.closebox = function () {
      var ibox = $element.closest('div.ibox');
      ibox.remove();
    }
  }  
})();