'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  'use strict';

  angular.module('inspinia', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap']);
})();

(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('index.information', {
      url: '/information',
      title: 'Información',
      templateUrl: 'app/information/information.html',
      controller: 'InformationCtrl',
      controllerAs: 'vm'
    });
  }
})();

(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('services', {
      url: '/services',
      title: 'Servicios',
      templateUrl: 'app/pages/services/services.html'
      // controller: 'ServicesCtrl',
      // controllerAs: 'vm',

    });
  }
})();

(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('index.monitores', {
      url: '/monitores',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/monitores.html',
      controller: 'MonitoresController',
      controllerAs: 'vm',
      sidebarMeta: {
        icon: 'fa-server',
        order: 800
      }
    }).state('index.monitores.general', {
      url: '/general',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/general/monitores.general.html',
      controller: 'GeneralMonitoresController',
      controllerAs: 'vm'
    }).state('index.monitores.servidor', {
      url: '/servidor',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/servidor/monitores.servidor.html',
      controller: 'ServidorMonitoresController',
      controllerAs: 'vm'
    }).state('index.monitores.blacklist', {
      url: '/blacklist',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/blacklist/monitores.blacklist.html',
      controller: 'BlackListMonitoresController',
      controllerAs: 'vm'
    }).state('index.monitores.correos', {
      url: '/correos',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/correos/monitores.correos.html',
      controller: 'CorreosMonitoresController',
      controllerAs: 'vm'
    }).state('index.monitores.dns', {
      url: '/dns',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/dns/monitores.dns.html',
      controller: 'DnsMonitoresController',
      controllerAs: 'vm'
    }).state('index.monitores.conectividad', {
      url: '/conectividad',
      title: 'Monitores',
      templateUrl: 'app/services/monitores/conectividad/monitores.conectividad.html',
      controller: 'ConectividadMonitoresController',
      controllerAs: 'vm'
    });
  }
})();

(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('inspinia').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('index.performance', {
      url: '/performance',
      title: 'Performance',
      templateUrl: 'app/services/performance/performance.html',
      controller: 'PerformanceController',
      controllerAs: 'vm',
      sidebarMeta: {
        icon: 'fa-bar-chart',
        order: 800
      }
    }).state('index.performance.general', {
      url: '/general',
      title: 'Performance',
      templateUrl: 'app/services/performance/general/performance.general.html',
      controller: 'GeneralPerformanceController',
      controllerAs: 'vm'
    }).state('index.performance.organico', {
      url: '/organic',
      title: 'Performance',
      templateUrl: 'app/services/performance/organico/performance.organico.html',
      controller: 'OrganicPerformanceController',
      controllerAs: 'vm'
    }).state('index.performance.responsive', {
      url: '/responsive',
      title: 'Performance',
      templateUrl: 'app/services/performance/responsive/performance.responsive.html',
      controller: 'ResponsivePerformanceController',
      controllerAs: 'vm'
    }).state('index.performance.graph', {
      url: '/graph',
      title: 'Performance',
      templateUrl: 'app/services/performance/graph/graph.html'
    });
  }
})();

'use strict';

angular.module('inspinia').controller('MainController', function () {

  var vm = this;

  vm.userName = 'Example user';
  vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
  vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';
});

(function () {
  'use strict';

  angular.module('inspinia').controller('ServicesController', ServicesCtrl);
  /** @ngInject */
  function ServicesCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  MultiLineGraphController.$inject = ["$scope"];
  angular.module('inspinia').controller('MultilineGraphController', MultiLineGraphController);

  function MultiLineGraphController($scope) {
    var vm = this,
        domain = new Array(100).fill(0).map(function (e, i) {
      return 2 * Math.PI * (i / 100);
    });
    var trace1 = {
      x: domain,
      y: domain.map(Math.sin),
      name: 'Sin(t)',
      type: 'scatter'
    };
    var trace2 = {
      x: domain,
      y: domain.map(function (e) {
        return Math.cos(3 * e);
      }),
      name: 'Cos(3t)',
      type: 'scatter'
    };
    var data = [trace1, trace2],
        layout = {
      title: 'Una grafica de prueba',
      font: {
        family: 'Raleway, snas-serif'
      },
      showlegend: true,
      margin: {
        l: 20,
        r: 0,
        b: 10,
        t: 50,
        pad: 4
      },
      yaxis: {
        visible: true,
        zeroline: false,
        anchor: 'free'
      },
      xaxis: {
        showgrid: true,
        zeroline: false,
        showticklabels: false
      }
    },
        options = {
      scrollZoom: false,
      displayModeBar: false
    };

    $(document).ready(function () {
      var WIDTH_IN_PERCENT_OF_PARENT = 90,
          HEIGHT_IN_PERCENT_OF_PARENT = 90,
          d3 = Plotly.d3,
          gd3 = d3.select("#" + $scope.id).append('div').style({
        width: 1 * WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
        height: .5 * HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': 0 + 'vh'
      }),
          gd = gd3.node();
      Plotly.plot(gd, data, layout, options);
      window.onresize = function () {
        return gd && !isHidden(gd) && Plotly.Plots.resize(gd);
      };
      function isHidden(gd) {
        var display = window.getComputedStyle(gd).display;
        return !display || display === 'none';
      }
    });
  }
})();
(function () {
  'use strict';

  PerformanceCtrl.$inject = ["$state"];
  angular.module('inspinia').controller('MonitoresController', ['$state', PerformanceCtrl]);
  /** @ngInject */
  function PerformanceCtrl($state) {
    var vm = this,
        baseState = "index.monitores",
        className = "col-md-2 col-sm-2 col-xs-4";
    vm.cName = className;
    vm.navButtons = [{
      title: "INF_GENERAL",
      target: baseState + ".general"
    }, {
      title: "SERVIDORES",
      target: baseState + ".servidor"
    }, {
      title: "LISTA_NEGRA",
      target: baseState + ".blacklist"
    }, {
      title: "CORREOS",
      target: baseState + ".correos"
    }, {
      title: "DNS",
      target: baseState + ".dns"
    }, {
      title: "CONECTIVIDAD",
      target: baseState + ".conectividad"
    }];
    $state.go('index.monitores.general');
  }
})();
(function () {
  'use strict';

  PerformanceCtrl.$inject = ["$state"];
  angular.module('inspinia').controller('PerformanceController', ['$state', PerformanceCtrl]);
  /** @ngInject */
  function PerformanceCtrl($state) {
    var vm = this,
        baseState = "index.performance";
    vm.navButtons = [{
      title: "RESUMEN",
      target: baseState + ".graph"
    }, {
      title: "EVALUACION_GENERAL",
      target: baseState + ".general"
    }, {
      title: "DISEÑO_RESPONSIVE",
      target: baseState + ".responsive"
    }, {
      title: "P_ORGANICO",
      target: baseState + ".organico"
    }];
    $state.go('index.performance.graph');
    vm.showDataDetails = showDataDetails;
    vm.dataSet = new Array(4).fill(0).map(function (e, i) {
      var aux = {};
      aux.title = 'Estadistica ' + ++i;
      aux.data = new Array(50).fill(0).map(Math.random);
      aux.total = aux.data.reduce(function (a, b) {
        return a + b;
      }).toFixed(0);
      return aux;
    });
    vm.demo4Options = {
      type: 'line',
      width: '100%',
      height: '100',
      lineColor: 'rgba(0, 130, 244, 0.8)',
      fillColor: "#ffffff"
    };
    function showDataDetails(data) {
      alert('Los detalles de la data son', data);
    }
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('BlackListMonitoresController', BlackListCtrl);

  function BlackListCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('ConectividadMonitoresController', ConectividadMonitoresCtrl);

  function ConectividadMonitoresCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('CorreosMonitoresController', CorreosMonitoresCtrl);

  function CorreosMonitoresCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('DnsMonitoresController', DnsMonitoresCtrl);

  function DnsMonitoresCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('GeneralMonitoresController', GeneralMonitoresCtrl);

  function GeneralMonitoresCtrl() {
    var vm = this;
    vm.generalEvaluation = 10;
    vm.criticLevel = 3;
    vm.serverPanelVisible = false;
    vm.panels = {
      serverState: true,
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
    }, {
      url: 'example.com',
      info: 'Caido desde hace 4 horas',
      status: 'No disponible',
      icon: {
        name: 'fa fa-times-circle',
        color: 'red'
      },
      showDetails: true
    }, {
      url: 'example2.com',
      info: 'Caido desde hace 4 horas',
      status: 'No disponible',
      icon: {
        name: 'fa fa-times-circle',
        color: 'red'
      },
      showDetails: true
    }, {
      url: 'monitor extra',
      info: 'Caido desde hace 0 horas',
      status: 'No disponible',
      icon: {
        name: 'fa fa-info',
        color: 'yellow'
      },
      showDetails: false
    }];
    vm.blackList = [].concat(_toConsumableArray(vm.serverState));
    //
    function showServerPanel(id) {
      vm.panels[id] = !vm.panels[id];
    }
    function addMonitor(id) {
      if (!vm[id]) vm[id] = [];
      vm[id].push({
        url: 'monitor extra',
        info: 'Caido desde hace 0 horas',
        status: 'No disponible',
        icon: {
          name: 'fa fa-info fa-2x',
          color: 'yellow'
        },
        showDetails: false
      });
    }
    function removeMonitor(id, i) {
      vm[id].splice(i, 1);
    }
    function showContent(id) {
      showServerPanel(id);
      // if (!vm.panels[id]) {
      //   $("#" + id).addClass('fadeOutRight');
      // } else {
      //   $("#" + id).removeClass('fadeOutRight');
      // }
      return;
    }
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('ServidorMonitoresController', ServidorMonitoresCtrl);

  function ServidorMonitoresCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('GeneralPerformanceController', GeneralPerformanceCtrl);
  /** @ngInject */
  /*
      Controlador para mostrar los resultados del performance general 
  */
  function GeneralPerformanceCtrl() {
    var vm = this;
    vm.generalEvaluation = "40";
    vm.criticLevel = 3;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('OrganicPerformanceController', OrganicPerformanceCtrl);
  /** @ngInject */
  /*
      Controlador para mostrar los resultados del performance organico 
  */
  function OrganicPerformanceCtrl() {
    var vm = this;
    vm.generalEvaluation = "20";
    vm.criticLevel = 1;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').controller('ResponsivePerformanceController', ResponsivePerformanceCtrl);
  /** @ngInject */
  /*
      Controlador para mostrar los resultados del performance organico 
  */
  function ResponsivePerformanceCtrl() {
    var vm = this;
    vm.generalEvaluation = "90";
    vm.criticLevel = 0;
  }
})();
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
    };
  }
})();
'use strict';

//Directive used to set metisMenu and minimalize button
angular.module('inspinia').directive('sideNavigation', ["$timeout", function ($timeout) {
  return {
    restrict: 'A',
    link: function link(scope, element) {
      // Call metsi to build when user signup
      scope.$watch('authentication.user', function () {
        $timeout(function () {
          element.metisMenu();
        });
      });

      // Colapse menu in mobile mode after click on element
      var menuElement = angular.element('#side-menu a:not([href$="\\#"])');
      menuElement.click(function () {
        if (angular.element(window).width() < 769) {
          angular.element("body").toggleClass("mini-navbar");
        }
      });

      // Enable initial fixed sidebar
      if (angular.element("body").hasClass('fixed-sidebar')) {
        var sidebar = element.parent();
        sidebar.slimScroll({
          height: '100%',
          railOpacity: 0.9
        });
      }
    }
  };
}]).directive('minimalizaSidebar', ["$timeout", function ($timeout) {
  return {
    restrict: 'A',
    template: '', //'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
    controller: ["$scope", function controller($scope) {
      angular.element('body').toggleClass('mini-navbar');
      $scope.minimalize = function () {
        angular.element('body').toggleClass('mini-navbar');
        if (!angular.element('body').hasClass('mini-navbar') || angular.element('body').hasClass('body-small')) {
          // Hide menu in order to smoothly turn on when maximize menu
          angular.element('#side-menu').hide();
          // For smoothly turn on menu
          $timeout(function () {
            angular.element('#side-menu').fadeIn(400);
          }, 200);
        } else {
          // Remove all inline style from jquery fadeIn function to reset menu state
          angular.element('#side-menu').removeAttr('style');
        }
      };
    }]
  };
}]);

(function () {
  'use strict';

  routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  angular.module('inspinia').config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "app/components/common/content.html"
    });
    $urlRouterProvider.otherwise('/index/information');
  }
})();

(function () {
  'use strict';

  runBlock.$inject = ["$log"];
  angular.module('inspinia').run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
})();

/**
 * INSPINIA - Responsive Admin Theme
 * 2.7
 *
 * Custom scripts
 */

angular.element(document).ready(function ($timeout) {

  // Full height of sidebar
  function fix_height() {
    var heightWithoutNavbar = angular.element("body > #wrapper").height() - 61;
    angular.element(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

    var navbarHeight = angular.element('nav.navbar-default').height();
    var wrapperHeigh = angular.element('#page-wrapper').height();

    if (navbarHeight > wrapperHeigh) {
      angular.element('#page-wrapper').css("min-height", navbarHeight + "px");
    }

    if (navbarHeight < wrapperHeigh) {
      angular.element('#page-wrapper').css("min-height", angular.element(window).height() + "px");
    }

    if (angular.element('body').hasClass('fixed-nav')) {
      if (navbarHeight > wrapperHeigh) {
        angular.element('#page-wrapper').css("min-height", navbarHeight + "px");
      } else {
        angular.element('#page-wrapper').css("min-height", angular.element(window).height() - 60 + "px");
      }
    }
  }

  angular.element(window).bind("load resize scroll", function () {
    if (!angular.element("body").hasClass('body-small')) {
      fix_height();
    }
  });

  // Move right sidebar top after scroll
  angular.element(window).scroll(function () {
    if (angular.element(window).scrollTop() > 0 && !angular.element('body').hasClass('fixed-nav')) {
      angular.element('#right-sidebar').addClass('sidebar-top');
    } else {
      angular.element('#right-sidebar').removeClass('sidebar-top');
    }
  });

  $timeout(function () {
    fix_height();
  });

  // Minimalize menu when screen is less than 768px
  angular.element(window).bind("load resize", function () {
    if (angular.element(document).width() < 769) {
      angular.element('body').addClass('body-small');
    } else {
      angular.element('body').removeClass('body-small');
    }
  });
});

(function () {
  'use strict';

  angular.module('inspinia').directive('bandSeparator', bandSeparator);
  /** @ngInject */
  function bandSeparator() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        addMonitor: '=',
        showContent: '=',
        childId: '@chid'
      },
      templateUrl: 'app/directives/band-separator/band-separator.html',
      controller: ["$scope", function controller($scope) {
        var vm = this;
      }],
      controllerAs: 'vm'
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('cButton', cButton);

  function cButton() {
    console.log("directiva cbutton");
    return {
      restrict: 'E',
      scope: {
        title: '@',
        className: '@cname',
        target: '@'
      },
      templateUrl: 'app/directives/cButton/cButton.html'
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('criticLevel', criticLevel);
  /** @ngInject */
  function criticLevel() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/critic-level/critic-level.html',
      scope: {
        level: "=?"
      },
      controller: ["$scope", function controller($scope) {
        var maxRating = 5,
            level = $scope.level;
        this.stars = new Array(maxRating).fill(0);
      }],
      controllerAs: 'vm'
    };
  }
})();
(function () {
  'use strict';

  Controller.$inject = ["$scope", "$element"];
  angular.module('inspinia').directive('iboxTools', iboxTools);

  Directive.$inject = ['$timeout'];
  function Directive($timeout) {
    var directive = {
      restrict: 'A',
      scope: true,
      template: '\n        <div class="ibox-tools" uib-dropdown>\n          <a ng-click="showhide()"> <i class="fa fa-chevron-up"></i></a>\n          <a href uib-dropdown-toggle>\n            <i class="fa fa-wrench"></i>\n          </a>\n          <ul uib-dropdown-menu>\n            <li><a href>Config option 1</a>\n            </li>\n            <li><a href>Config option 2</a>\n            </li>\n          </ul>\n          <a ng-click="closebox()"><i class="fa fa-times"></i></a>\n        </div>\n      ',
      controller: Controller
    };
    return directive;
  }
  /* @ngInject */
  function Controller($scope, $element) {
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
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('multilineGraph', multilineGraph);

  function multilineGraph() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        id: '@'
      },
      template: "<div id={{id}}></div>",
      controller: 'MultilineGraphController',
      controllerAs: 'vm'
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('progressBar2', progressBar);
  /** @ngInject */
  function progressBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/progress-bar/progress-bar.html',
      scope: {
        value: "=?",
        text: "@",
        type: "@"
      }
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('selector', selector);

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
(function () {
  'use strict';

  angular.module('inspinia').controller('SelectorController', SelectorCtrl);
  /** @ngInject */
  function SelectorCtrl() {
    var vm = this;
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('serverState', serverState);

  function serverState() {
    return {
      restrict: 'E',
      scope: {
        server: '=',
        remove: '&removeServer'
      },
      templateUrl: 'app/directives/server-state/server-state.html',
      controller: ["$scope", function controller($scope) {
        var vm = this;
        vm.server = $scope.server;
      }],
      controllerAs: 'vm'
    };
  }
})();
(function () {
  'use strict';

  angular.module('inspinia').directive('sparkline', sparkline);

  function sparkline() {
    return {
      restrict: 'A',
      scope: {
        sparkData: '=',
        sparkOptions: '='
      },
      link: function link(scope, element, attrs) {
        scope.$watch(scope.sparkData, function () {
          render();
        });
        scope.$watch(scope.sparkOptions, function () {
          render();
        });
        var render = function render() {
          $(element).sparkline(scope.sparkData, scope.sparkOptions);
        };
      }
    };
  };
})()
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/
 ** Licensed under the New BSD License - see above site for details */

(function (a, b, c) {
  (function (a) {
    typeof define == "function" && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.sparkline && a(jQuery);
  })(function (d) {
    "use strict";
    var e = {},
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L = 0;f = function f() {
      return { common: { type: "line", lineColor: "#00f", fillColor: "#cdf", defaultPixelsPerValue: 3, width: "auto", height: "auto", composite: !1, tagValuesAttribute: "values", tagOptionsPrefix: "spark", enableTagOptions: !1, enableHighlight: !0, highlightLighten: 1.4, tooltipSkipNull: !0, tooltipPrefix: "", tooltipSuffix: "", disableHiddenCheck: !1, numberFormatter: !1, numberDigitGroupCount: 3, numberDigitGroupSep: ",", numberDecimalMark: ".", disableTooltips: !1, disableInteraction: !1 }, line: { spotColor: "#f80", highlightSpotColor: "#5f5", highlightLineColor: "#f22", spotRadius: 1.5, minSpotColor: "#f80", maxSpotColor: "#f80", lineWidth: 1, normalRangeMin: c, normalRangeMax: c, normalRangeColor: "#ccc", drawNormalOnTop: !1, chartRangeMin: c, chartRangeMax: c, chartRangeMinX: c, chartRangeMaxX: c, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}') }, bar: { barColor: "#3366cc", negBarColor: "#f44", stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], zeroColor: c, nullColor: c, zeroAxis: !0, barWidth: 4, barSpacing: 1, chartRangeMax: c, chartRangeMin: c, chartRangeClip: !1, colorMap: c, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}') }, tristate: { barWidth: 4, barSpacing: 1, posBarColor: "#6f6", negBarColor: "#f44", zeroBarColor: "#999", colorMap: {}, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'), tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } } }, discrete: { lineHeight: "auto", thresholdColor: c, thresholdValue: 0, chartRangeMax: c, chartRangeMin: c, chartRangeClip: !1, tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}") }, bullet: { targetColor: "#f33", targetWidth: 3, performanceColor: "#33f", rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"], base: c, tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"), tooltipValueLookups: { fields: { r: "Range", p: "Performance", t: "Target" } } }, pie: { offset: 0, sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], borderWidth: 0, borderColor: "#000", tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)') }, box: { raw: !1, boxLineColor: "#000", boxFillColor: "#cdf", whiskerColor: "#000", outlierLineColor: "#333", outlierFillColor: "#fff", medianColor: "#f00", showOutliers: !0, outlierIQR: 1.5, spotRadius: 1.5, target: c, targetColor: "#4a2", chartRangeMax: c, chartRangeMin: c, tooltipFormat: new h("{{field:fields}}: {{value}}"), tooltipFormatFieldlistKey: "field", tooltipValueLookups: { fields: { lq: "Lower Quartile", med: "Median", uq: "Upper Quartile", lo: "Left Outlier", ro: "Right Outlier", lw: "Left Whisker", rw: "Right Whisker" } } } };
    }, E = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', g = function g() {
      var a, b;return a = function a() {
        this.init.apply(this, arguments);
      }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0](), arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a;
    }, d.SPFormatClass = h = g({ fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g, precre: /(\w+)\.(\d+)/, init: function init(a, b) {
        this.format = a, this.fclass = b;
      }, render: function render(a, b, d) {
        var e = this,
            f = a,
            g,
            h,
            i,
            j,
            k;return this.format.replace(this.fre, function () {
          var a;return h = arguments[1], i = arguments[3], g = e.precre.exec(h), g ? (k = g[2], h = g[1]) : k = !1, j = f[h], j === c ? "" : i && b && b[i] ? (a = b[i], a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (d.get("numberFormatter") ? j = d.get("numberFormatter")(j) : j = s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), j);
        });
      } }), d.spformat = function (a, b) {
      return new h(a, b);
    }, i = function i(a, b, c) {
      return a < b ? b : a > c ? c : a;
    }, j = function j(a, c) {
      var d;return c === 2 ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]);
    }, k = function k(a) {
      var b;switch (a) {case "undefined":
          a = c;break;case "null":
          a = null;break;case "true":
          a = !0;break;case "false":
          a = !1;break;default:
          b = parseFloat(a), a == b && (a = b);}return a;
    }, l = function l(a) {
      var b,
          c = [];for (b = a.length; b--;) {
        c[b] = k(a[b]);
      }return c;
    }, m = function m(a, b) {
      var c,
          d,
          e = [];for (c = 0, d = a.length; c < d; c++) {
        a[c] !== b && e.push(a[c]);
      }return e;
    }, n = function n(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, s = function s(a, b, c, e, f) {
      var g, h;a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f);for (h = g - c; h > 0; h -= c) {
        a.splice(h, 0, e);
      }return a.join("");
    }, o = function o(a, b, c) {
      var d;for (d = b.length; d--;) {
        if (c && b[d] === null) continue;if (b[d] !== a) return !1;
      }return !0;
    }, p = function p(a) {
      var b = 0,
          c;for (c = a.length; c--;) {
        b += typeof a[c] == "number" ? a[c] : 0;
      }return b;
    }, r = function r(a) {
      return d.isArray(a) ? a : [a];
    }, q = function q(b) {
      var c;a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c[typeof a.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = b);
    }, d.fn.simpledraw = function (b, e, f, g) {
      var h, i;if (f && (h = this.data("_jqs_vcanvas"))) return h;if (d.fn.sparkline.canvas === !1) return !1;if (d.fn.sparkline.canvas === c) {
        var j = a.createElement("canvas");if (!j.getContext || !j.getContext("2d")) {
          if (!a.namespaces || !!a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c, d) {
            return new J(a, b, c);
          };
        } else d.fn.sparkline.canvas = function (a, b, c, d) {
          return new I(a, b, c, d);
        };
      }return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h;
    }, d.fn.cleardraw = function () {
      var a = this.data("_jqs_vcanvas");a && a.reset();
    }, d.RangeMapClass = t = g({ init: function init(a) {
        var b,
            c,
            d = [];for (b in a) {
          a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]), c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]), c[2] = a[b], d.push(c));
        }this.map = a, this.rangelist = d || !1;
      }, get: function get(a) {
        var b = this.rangelist,
            d,
            e,
            f;if ((f = this.map[a]) !== c) return f;if (b) for (d = b.length; d--;) {
          e = b[d];if (e[0] <= a && e[1] >= a) return e[2];
        }return c;
      } }), d.range_map = function (a) {
      return new t(a);
    }, u = g({ init: function init(a, b) {
        var c = d(a);this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight");
      }, registerSparkline: function registerSparkline(a) {
        this.splist.push(a), this.over && this.updateDisplay();
      }, registerCanvas: function registerCanvas(a) {
        var b = d(a.canvas);this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this));
      }, reset: function reset(a) {
        this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c);
      }, mouseclick: function mouseclick(a) {
        var b = d.Event("sparklineClick");b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b);
      }, mouseenter: function mouseenter(b) {
        d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay();
      }, mouseleave: function mouseleave() {
        d(a.body).unbind("mousemove.jqs");var b = this.splist,
            c = b.length,
            e = !1,
            f,
            g;this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);for (g = 0; g < c; g++) {
          f = b[g], f.clearRegionHighlight() && (e = !0);
        }e && this.canvas.render();
      }, mousemove: function mousemove(a) {
        this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay();
      }, updateDisplay: function updateDisplay() {
        var a = this.splist,
            b = a.length,
            c = !1,
            e = this.$canvas.offset(),
            f = this.currentPageX - e.left,
            g = this.currentPageY - e.top,
            h,
            i,
            j,
            k,
            l;if (!this.over) return;for (j = 0; j < b; j++) {
          i = a[j], k = i.setRegionHighlight(this.currentEl, f, g), k && (c = !0);
        }if (c) {
          l = d.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l);if (this.tooltip) {
            h = "";for (j = 0; j < b; j++) {
              i = a[j], h += i.getCurrentRegionTooltip();
            }this.tooltip.setContent(h);
          }this.disableHighlight || this.canvas.render();
        }k === null && this.mouseleave();
      } }), v = g({ sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;", init: function init(b) {
        var c = b.get("tooltipClassname", "jqstooltip"),
            e = this.sizeStyle,
            f;this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", { id: "jqssizetip", style: e, "class": c }), this.tooltip = d("<div/>", { id: "jqstooltip", "class": c }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims();
      }, updateWindowDims: function updateWindowDims() {
        this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition();
      }, getSize: function getSize(a) {
        this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove();
      }, setContent: function setContent(a) {
        if (!a) {
          this.tooltip.css("visibility", "hidden"), this.hidden = !0;return;
        }this.getSize(a), this.tooltip.html(a).css({ width: this.width, height: this.height, visibility: "visible" }), this.hidden && (this.hidden = !1, this.updatePosition());
      }, updatePosition: function updatePosition(a, b) {
        if (a === c) {
          if (this.mousex === c) return;a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop;
        } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;if (!this.height || !this.width || this.hidden) return;b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({ left: a, top: b });
      }, remove: function remove() {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs");
      } }), F = function F() {
      q(E);
    }, d(F), K = [], d.fn.sparkline = function (b, e) {
      return this.each(function () {
        var f = new d.fn.sparkline.options(this, e),
            g = d(this),
            h,
            i;h = function h() {
          var e, h, i, j, k, l, m;if (b === "html" || b === c) {
            m = this.getAttribute(f.get("tagValuesAttribute"));if (m === c || m === null) m = g.html();e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else e = b;h = f.get("width") === "auto" ? e.length * f.get("defaultPixelsPerValue") : f.get("width");if (f.get("height") === "auto") {
            if (!f.get("composite") || !d.data(this, "_jqs_vcanvas")) j = a.createElement("span"), j.innerHTML = "a", g.html(j), i = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null;
          } else i = f.get("height");f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? f.get("composite") || k.reset() : (k = new u(this, f), d.data(this, "_jqs_mhandler", k)));if (f.get("composite") && !d.data(this, "_jqs_vcanvas")) {
            d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0));return;
          }l = new d.fn.sparkline[f.get("type")](this, e, f, h, i), l.render(), k && k.registerSparkline(l);
        };if (d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
          if (!f.get("composite") && d.data(this, "_jqs_pending")) for (i = K.length; i; i--) {
            K[i - 1][0] == this && K.splice(i - 1, 1);
          }K.push([this, h]), d.data(this, "_jqs_pending", !0);
        } else h.call(this);
      });
    }, d.fn.sparkline.defaults = f(), d.sparkline_display_visible = function () {
      var a,
          b,
          c,
          e = [];for (b = 0, c = K.length; b < c; b++) {
        a = K[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a), d.data(K[b][0], "_jqs_pending", !1), e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1), e.push(b));
      }for (b = e.length; b; b--) {
        K.splice(e[b - 1], 1);
      }
    }, d.fn.sparkline.options = g({ init: function init(a, b) {
        var c, f, g, h;this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, f = d.fn.sparkline.defaults, g = f.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix), h = this.getTagSetting("type"), h === e ? c = f[b.type || g.type] : c = f[h], this.mergedOptions = d.extend({}, g, c, b);
      }, getTagSetting: function getTagSetting(a) {
        var b = this.tagOptionsPrefix,
            d,
            f,
            g,
            h;if (b === !1 || b === c) return e;if (this.tagValCache.hasOwnProperty(a)) d = this.tagValCache.key;else {
          d = this.tag.getAttribute(b + a);if (d === c || d === null) d = e;else if (d.substr(0, 1) === "[") {
            d = d.substr(1, d.length - 2).split(",");for (f = d.length; f--;) {
              d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else if (d.substr(0, 1) === "{") {
            g = d.substr(1, d.length - 2).split(","), d = {};for (f = g.length; f--;) {
              h = g[f].split(":", 2), d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else d = k(d);this.tagValCache.key = d;
        }return d;
      }, get: function get(a, b) {
        var d = this.getTagSetting(a),
            f;return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f;
      } }), d.fn.sparkline._base = g({ disabled: !1, init: function init(a, b, e, f, g) {
        this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c;
      }, initTarget: function initTarget() {
        var a = !this.options.get("disableInteraction");(this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
      }, render: function render() {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0;
      }, getRegion: function getRegion(a, b) {}, setRegionHighlight: function setRegionHighlight(a, b, d) {
        var e = this.currentRegion,
            f = !this.options.get("disableHighlight"),
            g;return b > this.canvasWidth || d > this.canvasHeight || b < 0 || d < 0 ? null : (g = this.getRegion(a, b, d), e !== g ? (e !== c && f && this.removeHighlight(), this.currentRegion = g, g !== c && f && this.renderHighlight(), !0) : !1);
      }, clearRegionHighlight: function clearRegionHighlight() {
        return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1;
      }, renderHighlight: function renderHighlight() {
        this.changeHighlight(!0);
      }, removeHighlight: function removeHighlight() {
        this.changeHighlight(!1);
      }, changeHighlight: function changeHighlight(a) {}, getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var a = this.options,
            b = "",
            e = [],
            f,
            g,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t;if (this.currentRegion === c) return "";f = this.getCurrentRegionFields(), q = a.get("tooltipFormatter");if (q) return q(this, a, f);a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"), g = this.options.get("tooltipFormat");if (!g) return "";d.isArray(g) || (g = [g]), d.isArray(f) || (f = [f]), m = this.options.get("tooltipFormatFieldlist"), n = this.options.get("tooltipFormatFieldlistKey");if (m && n) {
          o = [];for (l = f.length; l--;) {
            p = f[l][n], (t = d.inArray(p, m)) != -1 && (o[t] = f[l]);
          }f = o;
        }i = g.length, s = f.length;for (l = 0; l < i; l++) {
          r = g[l], typeof r == "string" && (r = new h(r)), j = r.fclass || "jqsfield";for (t = 0; t < s; t++) {
            if (!f[t].isNull || !a.get("tooltipSkipNull")) d.extend(f[t], { prefix: a.get("tooltipPrefix"), suffix: a.get("tooltipSuffix") }), k = r.render(f[t], a.get("tooltipValueLookups"), a), e.push('<div class="' + j + '">' + k + "</div>");
          }
        }return e.length ? b + e.join("\n") : "";
      }, getCurrentRegionFields: function getCurrentRegionFields() {}, calcHighlightColor: function calcHighlightColor(a, c) {
        var d = c.get("highlightColor"),
            e = c.get("highlightLighten"),
            f,
            g,
            h,
            j;if (d) return d;if (e) {
          f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if (f) {
            h = [], g = a.length === 4 ? 16 : 1;for (j = 0; j < 3; j++) {
              h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255);
            }return "rgb(" + h.join(",") + ")";
          }
        }return a;
      } }), w = { changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.target,
            e = this.regionShapes[b],
            f;e && (f = this.renderRegion(b, a), d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f), this.regionShapes[b] = d.map(f, function (a) {
          return a.id;
        })) : (c.replaceWithShape(e, f), this.regionShapes[b] = f.id));
      }, render: function render() {
        var a = this.values,
            b = this.target,
            c = this.regionShapes,
            e,
            f,
            g,
            h;if (!this.cls._super.render.call(this)) return;for (g = a.length; g--;) {
          e = this.renderRegion(g);if (e) {
            if (d.isArray(e)) {
              f = [];for (h = e.length; h--;) {
                e[h].append(), f.push(e[h].id);
              }c[g] = f;
            } else e.append(), c[g] = e.id;
          } else c[g] = null;
        }b.render();
      } }, d.fn.sparkline.line = x = g(d.fn.sparkline._base, { type: "line", init: function init(a, b, c, d, e) {
        x._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget();
      }, getRegion: function getRegion(a, b, d) {
        var e,
            f = this.regionMap;for (e = f.length; e--;) {
          if (f[e] !== null && b >= f[e][0] && b <= f[e][1]) return f[e][2];
        }return c;
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;return { isNull: this.yvalues[a] === null, x: this.xvalues[a], y: this.yvalues[a], color: this.options.get("lineColor"), fillColor: this.options.get("fillColor"), offset: a };
      }, renderHighlight: function renderHighlight() {
        var a = this.currentRegion,
            b = this.target,
            d = this.vertices[a],
            e = this.options,
            f = e.get("spotRadius"),
            g = e.get("highlightSpotColor"),
            h = e.get("highlightLineColor"),
            i,
            j;if (!d) return;f && g && (i = b.drawCircle(d[0], d[1], f, c, g), this.highlightSpotId = i.id, b.insertAfterShape(this.lastShapeId, i)), h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = j.id, b.insertAfterShape(this.lastShapeId, j));
      }, removeHighlight: function removeHighlight() {
        var a = this.target;this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null);
      }, scanValues: function scanValues() {
        var a = this.values,
            c = a.length,
            d = this.xvalues,
            e = this.yvalues,
            f = this.yminmax,
            g,
            h,
            i,
            j,
            k;for (g = 0; g < c; g++) {
          h = a[g], i = typeof a[g] == "string", j = _typeof(a[g]) == "object" && a[g] instanceof Array, k = i && a[g].split(":"), i && k.length === 2 ? (d.push(Number(k[0])), e.push(Number(k[1])), f.push(Number(k[1]))) : j ? (d.push(h[0]), e.push(h[1]), f.push(h[1])) : (d.push(g), a[g] === null || a[g] === "null" ? e.push(null) : (e.push(Number(h)), f.push(Number(h))));
        }this.options.get("xvalues") && (d = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, f), this.miny = this.minyorg = b.min.apply(b, f), this.maxx = b.max.apply(b, d), this.minx = b.min.apply(b, d), this.xvalues = d, this.yvalues = e, this.yminmax = f;
      }, processRangeOptions: function processRangeOptions() {
        var a = this.options,
            b = a.get("normalRangeMin"),
            d = a.get("normalRangeMax");b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"));
      }, drawNormalRange: function drawNormalRange(a, d, e, f, g) {
        var h = this.options.get("normalRangeMin"),
            i = this.options.get("normalRangeMax"),
            j = d + b.round(e - e * ((i - this.miny) / g)),
            k = b.round(e * (i - h) / g);this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append();
      }, render: function render() {
        var a = this.options,
            e = this.target,
            f = this.canvasWidth,
            g = this.canvasHeight,
            h = this.vertices,
            i = a.get("spotRadius"),
            j = this.regionMap,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            u,
            v,
            w,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K;if (!x._super.render.call(this)) return;this.scanValues(), this.processRangeOptions(), I = this.xvalues, J = this.yvalues;if (!this.yminmax.length || this.yvalues.length < 2) return;n = o = 0, k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, m = this.yvalues.length - 1, i && (f < i * 4 || g < i * 4) && (i = 0);if (i) {
          G = a.get("highlightSpotColor") && !a.get("disableInteraction");if (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny) g -= b.ceil(i);if (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy) g -= b.ceil(i), n += b.ceil(i);if (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy)) o += b.ceil(i), f -= b.ceil(i);if (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy)) f -= b.ceil(i);
        }g--, a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), q = [], r = [q], z = A = null, B = J.length;for (K = 0; K < B; K++) {
          s = I[K], v = I[K + 1], u = J[K], w = o + b.round((s - this.minx) * (f / k)), y = K < B - 1 ? o + b.round((v - this.minx) * (f / k)) : f, A = w + (y - w) / 2, j[K] = [z || 0, A, K], z = A, u === null ? K && (J[K - 1] !== null && (q = [], r.push(q)), h.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), q.length || q.push([w, n + g]), p = [w, n + b.round(g - g * ((u - this.miny) / l))], q.push(p), h.push(p));
        }C = [], D = [], E = r.length;for (K = 0; K < E; K++) {
          q = r[K], q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]), D.push(q.slice(0)), q.pop()), q.length > 2 && (q[0] = [q[0][0], q[1][1]]), C.push(q));
        }E = D.length;for (K = 0; K < E; K++) {
          e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
        }a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), E = C.length;for (K = 0; K < E; K++) {
          e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
        }if (i && a.get("valueSpots")) {
          F = a.get("valueSpots"), F.get === c && (F = new t(F));for (K = 0; K < B; K++) {
            H = F.get(J[K]), H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append();
          }
        }i && a.get("spotColor") && J[m] !== null && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(), this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()), i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())), this.lastShapeId = e.getLastShapeId(), this.canvasTop = n, e.render();
      } }), d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, { type: "bar", init: function init(a, e, f, g, h) {
        var j = parseInt(f.get("barWidth"), 10),
            n = parseInt(f.get("barSpacing"), 10),
            o = f.get("chartRangeMin"),
            p = f.get("chartRangeMax"),
            q = f.get("chartRangeClip"),
            r = Infinity,
            s = -Infinity,
            u,
            v,
            w,
            x,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R;y._super.init.call(this, a, e, f, g, h);for (A = 0, B = e.length; A < B; A++) {
          O = e[A], u = typeof O == "string" && O.indexOf(":") > -1;if (u || d.isArray(O)) J = !0, u && (O = e[A] = l(O.split(":"))), O = m(O, null), v = b.min.apply(b, O), w = b.max.apply(b, O), v < r && (r = v), w > s && (s = w);
        }this.stacked = J, this.regionShapes = {}, this.barWidth = j, this.barSpacing = n, this.totalBarWidth = j + n, this.width = g = e.length * j + (e.length - 1) * n, this.initTarget(), q && (H = o === c ? -Infinity : o, I = p === c ? Infinity : p), z = [], x = J ? [] : z;var S = [],
            T = [];for (A = 0, B = e.length; A < B; A++) {
          if (J) {
            K = e[A], e[A] = N = [], S[A] = 0, x[A] = T[A] = 0;for (L = 0, M = K.length; L < M; L++) {
              O = N[L] = q ? i(K[L], H, I) : K[L], O !== null && (O > 0 && (S[A] += O), r < 0 && s > 0 ? O < 0 ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (O < 0 ? s : r)), z.push(O));
            }
          } else O = q ? i(e[A], H, I) : e[A], O = e[A] = k(O), O !== null && z.push(O);
        }this.max = G = b.max.apply(b, z), this.min = F = b.min.apply(b, z), this.stackMax = s = J ? b.max.apply(b, S) : G, this.stackMin = r = J ? b.min.apply(b, z) : F, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")), this.zeroAxis = D = f.get("zeroAxis", !0), F <= 0 && G >= 0 && D ? E = 0 : D == 0 ? E = F : F > 0 ? E = F : E = G, this.xaxisOffset = E, C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F, this.canvasHeightEf = D && F < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, F < E ? (Q = J && G >= 0 ? s : G, P = (Q - E) / C * this.canvasHeight, P !== b.ceil(P) && (this.canvasHeightEf -= 2, P = b.ceil(P))) : P = this.canvasHeight, this.yoffset = P, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.range = C;
      }, getRegion: function getRegion(a, d, e) {
        var f = b.floor(d / this.totalBarWidth);return f < 0 || f >= this.values.length ? c : f;
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion,
            b = r(this.values[a]),
            c = [],
            d,
            e;for (e = b.length; e--;) {
          d = b[e], c.push({ isNull: d === null, value: d, color: this.calcColor(e, d, a), offset: a });
        }return c;
      }, calcColor: function calcColor(a, b, e) {
        var f = this.colorMapByIndex,
            g = this.colorMapByValue,
            h = this.options,
            i,
            j;return this.stacked ? i = h.get("stackedBarColor") : i = b < 0 ? h.get("negBarColor") : h.get("barColor"), b === 0 && h.get("zeroColor") !== c && (i = h.get("zeroColor")), g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]), d.isArray(i) ? i[a % i.length] : i;
      }, renderRegion: function renderRegion(a, e) {
        var f = this.values[a],
            g = this.options,
            h = this.xaxisOffset,
            i = [],
            j = this.range,
            k = this.stacked,
            l = this.target,
            m = a * this.totalBarWidth,
            n = this.canvasHeightEf,
            p = this.yoffset,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z;f = d.isArray(f) ? f : [f], w = f.length, x = f[0], t = o(null, f), z = o(h, f, !0);if (t) return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), q = p > 0 ? p - 1 : p, l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;u = p;for (v = 0; v < w; v++) {
          x = f[v];if (k && x === h) {
            if (!z || y) continue;y = !0;
          }j > 0 ? r = b.floor(n * (b.abs(x - h) / j)) + 1 : r = 1, x < h || x === h && p === 0 ? (q = u, u += r) : (q = p - r, p -= r), s = this.calcColor(v, x, a), e && (s = this.calcHighlightColor(s, g)), i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s));
        }return i.length === 1 ? i[0] : i;
      } }), d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, { type: "tristate", init: function init(a, b, e, f, g) {
        var h = parseInt(e.get("barWidth"), 10),
            i = parseInt(e.get("barSpacing"), 10);z._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.initTarget();
      }, getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.totalBarWidth);
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;return { isNull: this.values[a] === c, value: this.values[a], color: this.calcColor(this.values[a], a), offset: a };
      }, calcColor: function calcColor(a, b) {
        var c = this.values,
            d = this.options,
            e = this.colorMapByIndex,
            f = this.colorMapByValue,
            g,
            h;return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"), g;
      }, renderRegion: function renderRegion(a, c) {
        var d = this.values,
            e = this.options,
            f = this.target,
            g,
            h,
            i,
            j,
            k,
            l;g = f.pixelHeight, i = b.round(g / 2), j = a * this.totalBarWidth, d[a] < 0 ? (k = i, h = i - 1) : d[a] > 0 ? (k = 0, h = i - 1) : (k = i - 1, h = 2), l = this.calcColor(d[a], a);if (l === null) return;return c && (l = this.calcHighlightColor(l, e)), f.drawRect(j, k, this.barWidth - 1, h - 1, l, l);
      } }), d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, { type: "discrete", init: function init(a, e, f, g, h) {
        A._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = f.get("width") === "auto" ? e.length * 2 : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = f.get("lineHeight") === "auto" ? b.round(this.canvasHeight * .3) : f.get("lineHeight"));
      }, getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.itemWidth);
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;return { isNull: this.values[a] === c, value: this.values[a], offset: a };
      }, renderRegion: function renderRegion(a, c) {
        var d = this.values,
            e = this.options,
            f = this.min,
            g = this.max,
            h = this.range,
            j = this.interval,
            k = this.target,
            l = this.canvasHeight,
            m = this.lineHeight,
            n = l - m,
            o,
            p,
            q,
            r;return p = i(d[a], f, g), r = a * j, o = b.round(n - n * ((p - f) / h)), q = e.get("thresholdColor") && p < e.get("thresholdValue") ? e.get("thresholdColor") : e.get("lineColor"), c && (q = this.calcHighlightColor(q, e)), k.drawLine(r, o, r, o + m, q);
      } }), d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, { type: "bullet", init: function init(a, d, e, f, g) {
        var h, i, j;B._super.init.call(this, a, d, e, f, g), this.values = d = l(d), j = d.slice(), j[0] = j[0] === null ? j[2] : j[0], j[1] = d[1] === null ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), e.get("base") === c ? h = h < 0 ? h : 0 : h = e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = e.get("width") === "auto" ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget();
      }, getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;return { fieldkey: a.substr(0, 1), value: this.values[a.substr(1)], region: a };
      }, changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.valueShapes[b],
            d;delete this.shapes[c];switch (b.substr(0, 1)) {case "r":
            d = this.renderRange(b.substr(1), a);break;case "p":
            d = this.renderPerformance(a);break;case "t":
            d = this.renderTarget(a);}this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d);
      }, renderRange: function renderRange(a, c) {
        var d = this.values[a],
            e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
            f = this.options.get("rangeColors")[a - 2];return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f);
      }, renderPerformance: function renderPerformance(a) {
        var c = this.values[1],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
            e = this.options.get("performanceColor");return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(this.canvasHeight * .3), d - 1, b.round(this.canvasHeight * .4) - 1, e, e);
      }, renderTarget: function renderTarget(a) {
        var c = this.values[0],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
            e = b.round(this.canvasHeight * .1),
            f = this.canvasHeight - e * 2,
            g = this.options.get("targetColor");return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g);
      }, render: function render() {
        var a = this.values.length,
            b = this.target,
            c,
            d;if (!B._super.render.call(this)) return;for (c = 2; c < a; c++) {
          d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, this.valueShapes["r" + c] = d.id;
        }this.values[1] !== null && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", this.valueShapes.p1 = d.id), this.values[0] !== null && (d = this.renderTarget().append(), this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render();
      } }), d.fn.sparkline.pie = C = g(d.fn.sparkline._base, { type: "pie", init: function init(a, c, e, f, g) {
        var h = 0,
            i;C._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), e.get("width") === "auto" && (this.width = this.height);if (c.length > 0) for (i = c.length; i--;) {
          h += c[i];
        }this.total = h, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2);
      }, getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;return { isNull: this.values[a] === c, value: this.values[a], percent: this.values[a] / this.total * 100, color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length], offset: a };
      }, changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.renderSlice(b, a),
            d = this.valueShapes[b];delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b;
      }, renderSlice: function renderSlice(a, d) {
        var e = this.target,
            f = this.options,
            g = this.radius,
            h = f.get("borderWidth"),
            i = f.get("offset"),
            j = 2 * b.PI,
            k = this.values,
            l = this.total,
            m = i ? 2 * b.PI * (i / 360) : 0,
            n,
            o,
            p,
            q,
            r;q = k.length;for (p = 0; p < q; p++) {
          n = m, o = m, l > 0 && (o = m + j * (k[p] / l));if (a === p) return r = f.get("sliceColors")[p % f.get("sliceColors").length], d && (r = this.calcHighlightColor(r, f)), e.drawPieSlice(g, g, g - h, n, o, c, r);m = o;
        }
      }, render: function render() {
        var a = this.target,
            d = this.values,
            e = this.options,
            f = this.radius,
            g = e.get("borderWidth"),
            h,
            i;if (!C._super.render.call(this)) return;g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append();for (i = d.length; i--;) {
          d[i] && (h = this.renderSlice(i).append(), this.valueShapes[i] = h.id, this.shapes[h.id] = i);
        }a.render();
      } }), d.fn.sparkline.box = D = g(d.fn.sparkline._base, { type: "box", init: function init(a, b, c, e, f) {
        D._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = c.get("width") === "auto" ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1);
      }, getRegion: function getRegion() {
        return 1;
      }, getCurrentRegionFields: function getCurrentRegionFields() {
        var a = [{ field: "lq", value: this.quartiles[0] }, { field: "med", value: this.quartiles[1] }, { field: "uq", value: this.quartiles[2] }];return this.loutlier !== c && a.push({ field: "lo", value: this.loutlier }), this.routlier !== c && a.push({ field: "ro", value: this.routlier }), this.lwhisker !== c && a.push({ field: "lw", value: this.lwhisker }), this.rwhisker !== c && a.push({ field: "rw", value: this.rwhisker }), a;
      }, render: function render() {
        var a = this.target,
            d = this.values,
            e = d.length,
            f = this.options,
            g = this.canvasWidth,
            h = this.canvasHeight,
            i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"),
            k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"),
            l = 0,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w;if (!D._super.render.call(this)) return;if (f.get("raw")) f.get("showOutliers") && d.length > 5 ? (n = d[0], m = d[1], p = d[2], q = d[3], r = d[4], s = d[5], t = d[6]) : (m = d[0], p = d[1], q = d[2], r = d[3], s = d[4]);else {
          d.sort(function (a, b) {
            return a - b;
          }), p = j(d, 1), q = j(d, 2), r = j(d, 3), o = r - p;if (f.get("showOutliers")) {
            m = s = c;for (u = 0; u < e; u++) {
              m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]), d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
            }n = d[0], t = d[e - 1];
          } else m = d[0], s = d[e - 1];
        }this.quartiles = [p, q, r], this.lwhisker = m, this.rwhisker = s, this.loutlier = n, this.routlier = t, w = g / (k - i + 1), f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")), g -= 2 * b.ceil(f.get("spotRadius")), w = g / (k - i + 1), n < m && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), a.drawRect(b.round((p - i) * w + l), b.round(h * .1), b.round((r - p) * w), b.round(h * .8), f.get("boxLineColor"), f.get("boxFillColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((q - i) * w + l), b.round(h * .1), b.round((q - i) * w + l), b.round(h * .9), f.get("medianColor")).append(), f.get("target") && (v = b.ceil(f.get("spotRadius")), a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(), a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()), a.render();
      } }), G = g({ init: function init(a, b, c, d) {
        this.target = a, this.id = b, this.type = c, this.args = d;
      }, append: function append() {
        return this.target.appendShape(this), this;
      } }), H = g({ _pxregex: /(\d+)(px)?\s*$/i, init: function init(a, b, c) {
        if (!a) return;this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this);
      }, drawLine: function drawLine(a, b, c, d, e, f) {
        return this.drawShape([[a, b], [c, d]], e, f);
      }, drawShape: function drawShape(a, b, c, d) {
        return this._genShape("Shape", [a, b, c, d]);
      }, drawCircle: function drawCircle(a, b, c, d, e, f) {
        return this._genShape("Circle", [a, b, c, d, e, f]);
      }, drawPieSlice: function drawPieSlice(a, b, c, d, e, f, g) {
        return this._genShape("PieSlice", [a, b, c, d, e, f, g]);
      }, drawRect: function drawRect(a, b, c, d, e, f) {
        return this._genShape("Rect", [a, b, c, d, e, f]);
      }, getElement: function getElement() {
        return this.canvas;
      }, getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      }, reset: function reset() {
        alert("reset not implemented");
      }, _insert: function _insert(a, b) {
        d(b).html(a);
      }, _calculatePixelDims: function _calculatePixelDims(a, b, c) {
        var e;e = this._pxregex.exec(b), e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(), e = this._pxregex.exec(a), e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width();
      }, _genShape: function _genShape(a, b) {
        var c = L++;return b.unshift(c), new G(this, c, a, b);
      }, appendShape: function appendShape(a) {
        alert("appendShape not implemented");
      }, replaceWithShape: function replaceWithShape(a, b) {
        alert("replaceWithShape not implemented");
      }, insertAfterShape: function insertAfterShape(a, b) {
        alert("insertAfterShape not implemented");
      }, removeShapeId: function removeShapeId(a) {
        alert("removeShapeId not implemented");
      }, getShapeAt: function getShapeAt(a, b, c) {
        alert("getShapeAt not implemented");
      }, render: function render() {
        alert("render not implemented");
      } }), I = g(H, { init: function init(b, e, f, g) {
        I._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({ display: "inline-block", width: b, height: e, verticalAlign: "top" }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({ width: this.pixelWidth, height: this.pixelHeight });
      }, _getContext: function _getContext(a, b, d) {
        var e = this.canvas.getContext("2d");return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e;
      }, reset: function reset() {
        var a = this._getContext();a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c;
      }, _drawShape: function _drawShape(a, b, d, e, f) {
        var g = this._getContext(d, e, f),
            h,
            i;g.beginPath(), g.moveTo(b[0][0] + .5, b[0][1] + .5);for (h = 1, i = b.length; h < i; h++) {
          g.lineTo(b[h][0] + .5, b[h][1] + .5);
        }d !== c && g.stroke(), e !== c && g.fill(), this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      }, _drawCircle: function _drawCircle(a, d, e, f, g, h, i) {
        var j = this._getContext(g, h, i);j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill();
      }, _drawPieSlice: function _drawPieSlice(a, b, d, e, f, g, h, i) {
        var j = this._getContext(h, i);j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      }, _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g);
      }, appendShape: function appendShape(a) {
        return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id;
      }, replaceWithShape: function replaceWithShape(a, b) {
        var c = this.shapeseq,
            d;this.shapes[b.id] = b;for (d = c.length; d--;) {
          c[d] == a && (c[d] = b.id);
        }delete this.shapes[a];
      }, replaceWithShapes: function replaceWithShapes(a, b) {
        var c = this.shapeseq,
            d = {},
            e,
            f,
            g;for (f = a.length; f--;) {
          d[a[f]] = !0;
        }for (f = c.length; f--;) {
          e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], g = f);
        }for (f = b.length; f--;) {
          c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f];
        }
      }, insertAfterShape: function insertAfterShape(a, b) {
        var c = this.shapeseq,
            d;for (d = c.length; d--;) {
          if (c[d] === a) {
            c.splice(d + 1, 0, b.id), this.shapes[b.id] = b;return;
          }
        }
      }, removeShapeId: function removeShapeId(a) {
        var b = this.shapeseq,
            c;for (c = b.length; c--;) {
          if (b[c] === a) {
            b.splice(c, 1);break;
          }
        }delete this.shapes[a];
      }, getShapeAt: function getShapeAt(a, b, c) {
        return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId;
      }, render: function render() {
        var a = this.shapeseq,
            b = this.shapes,
            c = a.length,
            d = this._getContext(),
            e,
            f,
            g;d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);for (g = 0; g < c; g++) {
          e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
        }this.interact || (this.shapes = {}, this.shapeseq = []);
      } }), J = g(H, { init: function init(b, c, e) {
        var f;J._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({ display: "inline-block", position: "relative", overflow: "hidden", width: b, height: c, margin: "0px", padding: "0px", verticalAlign: "top" }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = "";
      }, _drawShape: function _drawShape(a, b, d, e, f) {
        var g = [],
            h,
            i,
            j,
            k,
            l,
            m,
            n;for (n = 0, m = b.length; n < m; n++) {
          g[n] = "" + b[n][0] + "," + b[n][1];
        }return h = g.splice(0, 1), f = f === c ? 1 : f, i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', k = g[0] === g[g.length - 1] ? "x " : "", l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + h + " l " + g.join(", ") + " " + k + 'e">' + " </v:shape>", l;
      }, _drawCircle: function _drawCircle(a, b, d, e, f, g, h) {
        var i, j, k;return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + e * 2 + "px; height:" + e * 2 + 'px"></v:oval>', k;
      }, _drawPieSlice: function _drawPieSlice(a, d, e, f, g, h, i, j) {
        var k, l, m, n, o, p, q, r;if (g === h) return "";h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f);if (l === n && m === o) {
          if (h - g < b.PI) return "";l = n = d + f, m = o = e;
        }return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e">' + " </v:shape>", r);
      }, _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g);
      }, reset: function reset() {
        this.group.innerHTML = "";
      }, appendShape: function appendShape(a) {
        var b = this["_draw" + a.type].apply(this, a.args);return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id;
      }, replaceWithShape: function replaceWithShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);c[0].outerHTML = e;
      }, replaceWithShapes: function replaceWithShapes(a, b) {
        var c = d("#jqsshape" + a[0]),
            e = "",
            f = b.length,
            g;for (g = 0; g < f; g++) {
          e += this["_draw" + b[g].type].apply(this, b[g].args);
        }c[0].outerHTML = e;for (g = 1; g < a.length; g++) {
          d("#jqsshape" + a[g]).remove();
        }
      }, insertAfterShape: function insertAfterShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);c[0].insertAdjacentHTML("afterEnd", e);
      }, removeShapeId: function removeShapeId(a) {
        var b = d("#jqsshape" + a);this.group.removeChild(b[0]);
      }, getShapeAt: function getShapeAt(a, b, c) {
        var d = a.id.substr(8);return d;
      }, render: function render() {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
      } });
  });
})(document, Math);
angular.module("inspinia").run(["$templateCache", function ($templateCache) {
  $templateCache.put("app/information/information.html", "<div class=\"wrapper wrapper-content animated fadeIn\"><div class=\"row\"><div class=\"col-md-12\"><div ba-panel=\"\" ba-panel-class=\"xmedium-panel\"><div class=\"row\"><div class=\"col-lg-12 col-md-12 m-b-md\"><h1 class=\"\">Indicadores web</h1></div><div class=\"row\"><div class=\"col-md-5 col-md-offset-1\"><selector title=\"vm.titles.performance\" icon=\"vm.icons.performance\" description=\"vm.descriptions.performance\" target=\"index.performance.graph\"></selector></div><div class=\"col-md-5\"><selector title=\"vm.titles.components\" icon=\"vm.icons.components\" description=\"vm.descriptions.components\" target=\"index.monitores\"></selector></div></div><div class=\"row\"><div class=\"col-md-5 col-md-offset-1\"><selector title=\"vm.titles.tools\" icon=\"vm.icons.tools\" description=\"vm.descriptions.tools\" target=\"index.tools\"></selector></div><div class=\"col-md-5\"><selector title=\"vm.titles.server\" icon=\"vm.icons.server\" description=\"vm.descriptions.server\" target=\"index.server\"></selector></div></div></div></div></div></div></div>");
  $templateCache.put("app/main/main.html", "<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class=\"glyphicon glyphicon-pencil\"></i></small></div></div></div></div>");
  $templateCache.put("app/minor/minor.html", "<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>");
  $templateCache.put("app/services/services.html", "<div class=\"row\"><div class=\"col-md-12\"><ui-view></ui-view></div></div>");
  $templateCache.put("app/components/common/content.html", "<div id=\"wrapper\"><div ng-include=\"\'app/components/common/navigation.html\'\"></div><div id=\"page-wrapper\" class=\"gray-bg {{$state.current.name}}\"><div ng-include=\"\'app/components/common/topnavbar.html\'\"></div><div ui-view=\"\"></div><div ng-include=\"\'app/components/common/footer.html\'\"></div></div></div>");
  $templateCache.put("app/components/common/footer.html", "<div class=\"footer\"><div class=\"pull-right\">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div>");
  $templateCache.put("app/components/common/ibox_tools.html", "<div class=\"ibox-tools\" uib-dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-up\"></i></a> <a uib-dropdown-toggle=\"\" href=\"\"><i class=\"fa fa-wrench\"></i></a><ul uib-dropdown-menu=\"\"><li><a href=\"\">Config option 1</a></li><li><a href=\"\">Config option 2</a></li></ul><a ng-click=\"closebox()\"><i class=\"fa fa-times\"></i></a></div>");
  $templateCache.put("app/components/common/navigation.html", "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\"><div class=\"sidebar-collapse\"><ul side-navigation=\"\" class=\"nav metismenu\" id=\"side-menu\"><li class=\"nav-header\"><div class=\"logo-element\">IN+</div></li><li ui-sref-active=\"active\"><a ui-sref=\"index.information\"><i class=\"fa fa-info\"></i> <span class=\"nav-label\">Información</span></a></li></ul></div></nav>");
  $templateCache.put("app/components/common/topnavbar.html", "<div class=\"row border-bottom\"><nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\"><div class=\"navbar-header\"><span minimaliza-sidebar=\"\"></span><form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\"></div></form></div><ul class=\"nav navbar-top-links navbar-right\"><li><a href=\"\"><i class=\"fa fa-sign-out\"></i> Log out</a></li></ul></nav></div>");
  $templateCache.put("app/directives/band-separator/band-separator.html", "<div class=\"row band-separator\"><div class=\"col-md-4\"><h2>{{ title }} <span class=\"fa fa-bars\" ng-click=\"showContent(childId)\"></span></h2></div><div class=\"col-md-4 pull-right\"><div class=\"upgrade\"><span><button class=\"btn btn-link pull-right\" ng-click=\"addMonitor(childId)\"><span class=\"fa fa-plus\"></span> ADD_MONITOR</button></span></div></div></div>");
  $templateCache.put("app/directives/cButton/cButton.html", "<div class=\"{{className || \'col-md-3 col-sm-3 col-xs-6\'}}\"><div class=\"button-wrapper\"><button type=\"button\" class=\"btn btn-primary form-control\" ui-sref=\"{{target}}\">{{title}}</button></div></div>");
  $templateCache.put("app/directives/critic-level/critic-level.html", "<div><p><strong>Nivel de criticidad:</strong> <span ng-repeat=\"star in vm.stars track by $index\" class=\"fa fa-star\" style=\"color: {{($index < level )? \'rgb(255,128,123)\': \'rgba(255,128,123,.4)\'}}\"></span> <span class=\"text-default\" ng-if=\"level < 2\">Muy bajo</span> <span class=\"text-danger\" ng-if=\"level >= 2\">Muy alto</span></p></div>");
  $templateCache.put("app/directives/progress-bar/progress-bar.html", "<div><h3>{{ text }}</h3><div class=\"progress\" style=\"background-color: rgba(100, 100, 100, .2)\"><div class=\"progress-bar progress-bar-{{type || \'default\'}}\" role=\"progressbar\" aria-valuenow=\"{{ value }}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{ value }}%\">{{value}}% Completado ({{value>90?\'exitoso\':\'puede mejorar\'}})</div></div></div>");
  $templateCache.put("app/directives/selector/selector.html", "<div class=\"panel panel-medium ibox-content product-box\" style=\"cursor: pointer\" ui-sref=\"{{ target }}\"><div class=\"panel-heading\" style=\"height: 100%\"><h3 class=\"panel-title\">{{ title }}</h3></div><div class=\"panel-body\" ng-init=\"showIcon=true\"><div style=\"width: 100%; background: #0e83929a; display: flex; justify-content: center;\"><i class=\"fa {{icon}}\" style=\"font-size: 10em\" ng-show=\"showIcon\"></i><div style=\"height: 150px\" class=\"p-md\"><p class=\"animated fadeInRight\" ng-bind-html=\"description\"></p></div></div></div></div>");
  $templateCache.put("app/directives/server-state/server-state.html", "<div class=\"ibox float-e-margins product-box\"><div class=\"ibox-title\"><h3>{{server.url}} <span class=\"fa fa-times pull-right\" ng-click=\"remove()\"></span></h3></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-md-8 p-w-md\">{{ server.info }}</div><div class=\"col-md-4\"><span class=\"{{ server.icon.name }} fa-4x\" style=\"color: {{server.icon.color}}\"></span></div><div class=\"col-md-12\"><hr style=\"border-color: {{server.icon.color}}; border-width: 10px; margin-top: 30px\"></div><div class=\"col-md-12\"><p class=\"text-center\"><strong style=\"color: {{server.icon.color}}\">{{ server.status }}</strong></p></div></div></div></div>");
  $templateCache.put("app/services/monitores/monitores.html", "<div class=\"row m-t-md m-b-lg\"><div class=\"col-md-12\"><div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-md-10 col-md-offset-1 wrapper\"><h1>COMPONENTES</h1><small ui-sref=\"index.information\" style=\"cursor: pointer\">< VOLVER</small><div class=\"row m-t-md\"><div ng-repeat=\"button in vm.navButtons\"><c-button title=\"{{button.title}}\" target=\"{{button.target}}\" cname=\"{{vm.cName}}\"></c-button></div></div></div></div><div class=\"wrapper wrapper-content\"><ui-view></ui-view></div></div></div>");
  $templateCache.put("app/services/performance/performance.html", "<div class=\"row m-t-md m-b-lg\"><div class=\"col-md-12\"><div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-md-10 col-md-offset-1 wrapper\"><h1>PERFORMANCE</h1><small ui-sref=\"index.information\" style=\"cursor: pointer\">< VOLVER</small><div class=\"row m-t-md\"><div ng-repeat=\"button in vm.navButtons\"><c-button title=\"{{button.title}}\" target=\"{{button.target}}\"></c-button></div></div></div></div><div class=\"wrapper wrapper-content\"><ui-view></ui-view></div></div></div>");
  $templateCache.put("app/services/monitores/blacklist/monitores.blacklist.html", "<div class=\"col-md-12\" ba-panel=\"\" ba-panel-title=\"Blacklist\" ba-panel-class=\"with-scroll\"><h1>Informacion para comenzar</h1></div>");
  $templateCache.put("app/services/monitores/conectividad/monitores.conectividad.html", "<div class=\"col-md-12\" ba-panel=\"\" ba-panel-title=\"Conectividad\" ba-panel-class=\"with-scroll\"><h1>Informacion para comenzar</h1></div>");
  $templateCache.put("app/services/monitores/correos/monitores.correos.html", "<div class=\"col-md-12\" ba-panel=\"\" ba-panel-title=\"Servidores de Correo\" ba-panel-class=\"with-scroll\"><h1>Informacion para comenzar</h1></div>");
  $templateCache.put("app/services/monitores/correos/performance.html", "<div class=\"row\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-10 col-md-offset-1 button-container\"><div class=\"row\"><div class=\"col-md-3 col-sm-3 col-xs-6\"><div class=\"button-wrapper\"><button type=\"button\" class=\"btn btn-primary form-control\" ui-sref=\"services.performance.graph\">Resumen</button></div></div><div class=\"col-md-3 col-sm-3 col-xs-6\"><div class=\"button-wrapper\"><button type=\"button\" class=\"btn btn-primary form-control\" ui-sref=\"services.performance.general\">Evaluación general</button></div></div><div class=\"col-md-3 col-sm-3 col-xs-6\"><div class=\"button-wrapper\"><button type=\"button\" class=\"btn btn-primary form-control\" ui-sref=\"services.performance.responsive\">Diseño responsive</button></div></div><div class=\"col-md-3 col-sm-3 col-xs-6\"><div class=\"button-wrapper\"><button type=\"button\" class=\"btn btn-primary form-control\" ui-sref=\"services.performance.organico\">P.Orgánico</button></div></div></div></div><div class=\"col-md-12\"><ui-view></ui-view></div></div></div></div>");
  $templateCache.put("app/services/monitores/dns/monitores.dns.html", "<div class=\"col-md-12\" ba-panel=\"\" ba-panel-title=\"dns\" ba-panel-class=\"with-scroll\"><h1>Informacion para comenzar</h1></div>");
  $templateCache.put("app/services/monitores/general/monitores.general.html", "<div class=\"wrapper wrapper-content animated fadeIn\"><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><h1>Overview</h1><div ibox-tools=\"\"></div></div><div class=\"ibox-content\"><div class=\"row p-w-lg\"><div class=\"col-md-12\"><progress-bar2 value=\"vm.generalEvaluation\" text=\"Información general\"></progress-bar2><div class=\"row\"><div class=\"col-md-12\"><critic-level level=\"vm.criticLevel\"></critic-level></div></div></div></div></div></div><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><div class=\"row\"><div class=\"col-md-12\"><band-separator title=\"SERVER_STATE\" add-monitor=\"vm.addMonitor\" show-content=\"vm.showContent\" chid=\"serverState\"></band-separator></div></div></div><div class=\"ibox-content\" id=\"serverState\"><div class=\"row p-w-md\" ng-if=\"vm.serverState.length && vm.panels.serverState\"><div class=\"col-md-12 server-state-container\"><div class=\"row gcontainer\"><div class=\"col-md-4\" ng-repeat=\"server in vm.serverState\"><div class=\"p-w-md\"><server-state server=\"server\" remove-server=\"vm.removeMonitor(\'serverState\', $index)\"></server-state></div></div></div></div></div></div></div><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><div class=\"row\"><div class=\"col-md-12\"><band-separator title=\"LISTA_NEGRA\" add-monitor=\"vm.addMonitor\" show-content=\"vm.showContent\" chid=\"blackList\"></band-separator></div></div></div><div class=\"ibox-content\" id=\"blackList\"><div class=\"row\" ng-if=\"vm.blackList.length && vm.panels.blackList\"><div class=\"col-md-12 server-state-container\"><div class=\"row gcontainer\"><div class=\"col-md-4\" ng-repeat=\"server in vm.blackList\"><div class=\"p-w-md\"><server-state server=\"server\" remove-server=\"vm.removeMonitor(\'blackList\', $index)\"></server-state></div></div></div></div></div></div></div></div>");
  $templateCache.put("app/services/monitores/servidor/monitores.servidor.html", "<div class=\"col-md-12\" ba-panel=\"\" ba-panel-title=\"Servidores\" ba-panel-class=\"with-scroll\"><h1>Informacion para comenzar</h1></div>");
  $templateCache.put("app/services/performance/general/performance.general.html", "<div class=\"col-md-12 animated fadeIn\"><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><h1>Desempeño general</h1></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-md-12 p-md\"><progress-bar2 value=\"vm.generalEvaluation\" text=\"Evaluación general\"></progress-bar2><div class=\"row\"><div class=\"col-md-12\"><critic-level level=\"vm.criticLevel\"></critic-level></div></div></div><div class=\"col-md-12\"><h2>Resultados de la evaluación</h2><div class=\"row\"><div class=\"col-md-12\"><div class=\"table-responsive\"><table class=\"table table-striped\"><tr><th>Elemento</th><th>Caracteristicas Evaluadas</th><th>Score actual</th><th>Score recomendado</th><th><span class=\"fa fa-info\"></span></th><th>Acciones</th></tr><tr><td>Accesibilidad</td><td>Correcta asignacion de tags</td><td>70</td><td>85</td><td><span class=\"fa fa-check\" style=\"color: #008000\"></span></td><td><span class=\"fa fa-search\"></span></td></tr></table></div></div></div></div></div></div></div></div>");
  $templateCache.put("app/services/performance/graph/graph.html", "<div class=\"col-md-12 animated fadeIn\"><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><h1>Resumen</h1></div><div class=\"ibox-content\"><div class=\"row p-md\"><div class=\"col-lg-3\" ng-repeat=\"data in vm.dataSet\"><div class=\"ibox\"><div class=\"ibox-content product-box\"><div class=\"p-sm\"><h5>{{data.title}}<span class=\"fa fa-search pull-right\" style=\"cursor: pointer\" ng-click=\"vm.showDataDetails(data)\"></span></h5><h2>{{data.total}}</h2></div><div sparkline=\"\" spark-data=\"data.data\" spark-options=\"vm.demo4Options\"></div></div></div></div><div class=\"col-md-12\"><multiline-graph id=\"primerGrafico\" data=\"vm.data\"></multiline-graph></div></div></div></div></div>");
  $templateCache.put("app/services/performance/organico/performance.organico.html", "<div class=\"col-md-12 animated fadeIn\"><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><h1>Desempeño general</h1></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-md-12\"><critic-level level=\"vm.criticLevel\"></critic-level></div><div class=\"col-md-12\"><h2>Resultados de la evaluación</h2><div class=\"row\"><div class=\"col-md-12\"><div class=\"table-responsive\"><table class=\"table table-striped\"><tr><th>Elemento</th><th>Resultado</th><th>Estándar recomendado</th><th><span class=\"fa fa-info\"></span> Evaluación</th><th>Acciones</th></tr><tr><td>¿El sitio web utiliza tablas?</td><td>No</td><td>No es recomendable usar tablas en su portal</td><td><span class=\"fa fa-check\" style=\"color: #008000\"></span></td><td><span class=\"fa fa-search\"></span></td></tr></table></div></div></div></div></div></div></div></div>");
  $templateCache.put("app/services/performance/responsive/performance.responsive.html", "<div class=\"col-md-12 animated fadeIn\"><div class=\"ibox e-margin-float\"><div class=\"ibox-title\"><h1>Desempeño general</h1></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-md-12\"><progress-bar2 value=\"vm.generalEvaluation\" text=\"Vista previa dispositivos móviles\"></progress-bar2><div class=\"row\"><div class=\"col-md-12\"><critic-level level=\"vm.criticLevel\"></critic-level></div><div class=\"col-md-12\"><div><h1 class=\"text-center\">Por definir</h1></div></div><div class=\"col-md-12\" style=\"margin-top: 15px\"><progress-bar2 value=\"vm.generalEvaluation\" text=\"Vista previa otras pantallas\"></progress-bar2><div class=\"row\"><div class=\"col-md-12\"><critic-level level=\"vm.criticLevel\"></critic-level></div><div class=\"col-md-12\"><div><h1 class=\"text-center\">Por definir</h1></div></div></div></div></div></div></div></div></div></div>");
}]);
//# sourceMappingURL=../maps/scripts/app-5151bf0d0d.js.map
