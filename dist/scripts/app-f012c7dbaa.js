"use strict";!function(){angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap"])}(),function(){function e(){var e=this;e.generalEvaluation="90",e.criticLevel=0}angular.module("inspinia").controller("ResponsivePerformanceController",e)}(),function(){function e(){var e=this;e.generalEvaluation="20",e.criticLevel=1}angular.module("inspinia").controller("OrganicPerformanceController",e)}(),function(){function e(){var e=this;e.generalEvaluation="40",e.criticLevel=3}angular.module("inspinia").controller("GeneralPerformanceController",e)}(),function(){function e(){}angular.module("inspinia").controller("ServidorMonitoresController",e)}(),function(){function e(){function e(){o.serverPanelVisible=!o.serverPanelVisible}function r(){o.serverStates.push({url:"monitor extra",info:"Caido desde hace 0 horas",status:"No disponible",icon:{name:"fa fa-info fa-2x",color:"yellow"},showDetails:!1})}function a(e){o.serverStates.splice(e,1)}var o=this;o.generalEvaluation=10,o.criticLevel=3,o.serverPanelVisible=!1,o.showServerPanel=e,o.addMonitor=r,o.removeMonitor=a,o.serverStates=[{url:"kirlands.com",info:"Disponible desde 05/11/2017",status:"Disponible",icon:{name:"fa fa-check",color:"green"},showDetails:!0},{url:"example.com",info:"Caido desde hace 4 horas",status:"No disponible",icon:{name:"fa fa-times-circle",color:"red"},showDetails:!0},{url:"example2.com",info:"Caido desde hace 4 horas",status:"No disponible",icon:{name:"fa fa-times-circle",color:"red"},showDetails:!0},{url:"monitor extra",info:"Caido desde hace 0 horas",status:"No disponible",icon:{name:"fa fa-info",color:"yellow"},showDetails:!1}]}angular.module("inspinia").controller("GeneralMonitoresController",e)}(),function(){function e(){}angular.module("inspinia").controller("DnsMonitoresController",e)}(),function(){function e(){}angular.module("inspinia").controller("CorreosMonitoresController",e)}(),function(){function e(){}angular.module("inspinia").controller("ConectividadMonitoresController",e)}(),function(){function e(){}angular.module("inspinia").controller("BlackListMonitoresController",e)}(),function(){function e(e,r,a){var o=r.colors,t=e[0].getAttribute("id");AmCharts.makeChart(t,{type:"serial",theme:"none",color:o.defaultText,dataDateFormat:"YYYY-MM-DD",precision:2,valueAxes:[{color:o.defaultText,axisColor:o.defaultText,gridColor:o.defaultText,id:"v1",title:"Sales",position:"left",autoGridCount:!1,labelFunction:function(e){return"$"+Math.round(e)+"M"}},{color:o.defaultText,axisColor:o.defaultText,gridColor:o.defaultText,id:"v2",title:"Market Days",gridAlpha:0,position:"right",autoGridCount:!1}],graphs:[{id:"g3",color:o.defaultText,valueAxis:"v1",lineColor:o.primaryLight,fillColors:o.primaryLight,fillAlphas:.8,lineAlpha:.8,type:"column",title:"Actual Sales",valueField:"sales2",clustered:!1,columnWidth:.5,lineColorField:o.defaultText,legendValueText:"$[[value]]M",balloonText:"[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"},{id:"g4",valueAxis:"v1",color:o.defaultText,lineColor:o.primary,fillColors:o.primary,fillAlphas:.9,lineAlpha:.9,type:"column",title:"Target Sales",valueField:"sales1",clustered:!1,columnWidth:.3,legendValueText:"$[[value]]M",balloonText:"[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"},{id:"g1",valueAxis:"v2",bullet:"round",bulletBorderAlpha:1,bulletColor:o.defaultText,color:o.defaultText,bulletSize:5,hideBulletsCount:50,lineThickness:2,lineColor:o.danger,type:"smoothedLine",title:"Market Days",useLineColorForBulletBorder:!0,valueField:"market1",balloonText:"[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"},{id:"g2",valueAxis:"v2",color:o.defaultText,bullet:"round",bulletBorderAlpha:1,bulletColor:o.defaultText,bulletSize:5,hideBulletsCount:50,lineThickness:2,lineColor:o.warning,type:"smoothedLine",dashLength:5,title:"Market Days ALL",useLineColorForBulletBorder:!0,valueField:"market2",balloonText:"[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"}],chartScrollbar:{graph:"g1",oppositeAxis:!1,offset:30,gridAlpha:0,color:o.defaultText,scrollbarHeight:50,backgroundAlpha:0,selectedBackgroundAlpha:.05,selectedBackgroundColor:o.defaultText,graphFillAlpha:0,autoGridCount:!0,selectedGraphFillAlpha:0,graphLineAlpha:.2,selectedGraphLineColor:o.defaultText,selectedGraphLineAlpha:1},chartCursor:{pan:!0,cursorColor:o.danger,valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,valueLineAlpha:.2},categoryField:"date",categoryAxis:{axisColor:o.defaultText,color:o.defaultText,gridColor:o.defaultText,parseDates:!0,dashLength:1,minorGridEnabled:!0},legend:{useGraphSettings:!0,position:"top",color:o.defaultText},balloon:{borderThickness:1,shadowAlpha:0},"export":{enabled:!0},dataProvider:[{date:"2013-01-16",market1:71,market2:75,sales1:5,sales2:8},{date:"2013-01-17",market1:74,market2:78,sales1:4,sales2:6},{date:"2013-01-18",market1:78,market2:88,sales1:5,sales2:2},{date:"2013-01-19",market1:85,market2:89,sales1:8,sales2:9},{date:"2013-01-20",market1:82,market2:89,sales1:9,sales2:6},{date:"2013-01-21",market1:83,market2:85,sales1:3,sales2:5},{date:"2013-01-22",market1:88,market2:92,sales1:5,sales2:7},{date:"2013-01-23",market1:85,market2:90,sales1:7,sales2:6},{date:"2013-01-24",market1:85,market2:91,sales1:9,sales2:5},{date:"2013-01-25",market1:80,market2:84,sales1:5,sales2:8},{date:"2013-01-26",market1:87,market2:92,sales1:4,sales2:8},{date:"2013-01-27",market1:84,market2:87,sales1:3,sales2:4},{date:"2013-01-28",market1:83,market2:88,sales1:5,sales2:7},{date:"2013-01-29",market1:84,market2:87,sales1:5,sales2:8},{date:"2013-01-30",market1:81,market2:85,sales1:4,sales2:7}],pathToImages:a.images.amChart})}e.$inject=["$element","baConfig","layoutPaths"],angular.module("inspinia").controller("combinedChartCtrl",e)}(),function(){function e(e){e.go("index.performance.graph")}e.$inject=["$state"],angular.module("inspinia").controller("PerformanceController",["$state",e])}(),function(){function e(e){e.go("index.monitores.general")}e.$inject=["$state"],angular.module("inspinia").controller("MonitoresController",["$state",e])}(),function(){function e(){}angular.module("inspinia").controller("SelectorController",e)}(),function(){function e(){return{restrict:"E",templateUrl:"app/directives/selector/selector.html",scope:{title:"=?",icon:"=?",description:"=?",target:"@"},controller:"SelectorController",controllerAs:"vm"}}angular.module("inspinia").directive("selector",e)}(),function(){function e(){return{restrict:"E",scope:{server:"=",remove:"&removeServer"},templateUrl:"app/directives/server-state/server-state.html",controller:["$scope",function(e){var r=this;r.server=e.server}],controllerAs:"vm"}}angular.module("inspinia").directive("serverState",e)}(),function(){function e(){return{restrict:"E",templateUrl:"app/directives/progress-bar/progress-bar.html",scope:{value:"=?",text:"@",type:"@"}}}angular.module("inspinia").directive("progressBar2",e)}(),function(){function e(){return{restrict:"E",scope:{data:"=",id:"@"},template:"\n        <div id={{id}}></div>\n      ",controller:"MultilineGraphController",controllerAs:"vm"}}angular.module("inspinia").directive("multilineGraph",e)}(),function(){function e(e){var r=new Array(100).fill(0).map(function(e,r){return 2*Math.PI*(r/100)}),a={x:r,y:r.map(Math.sin),name:"Sin(t)",type:"scatter"},o={x:r,y:r.map(function(e){return Math.cos(3*e)}),name:"Cos(3t)",type:"scatter"},t=[a,o],i={title:"Una grafica de prueba",font:{family:"Raleway, snas-serif"},showlegend:!0,margin:{l:20,r:0,b:10,t:50,pad:4},yaxis:{visible:!0,zeroline:!1,anchor:"free"},xaxis:{showgrid:!0,zeroline:!1,showticklabels:!1}},l={scrollZoom:!1,displayModeBar:!1};$(document).ready(function(){var r=90,a=90,o=Plotly.d3,n=o.select("#"+e.id).append("div").style({width:1*r+"%","margin-left":(100-r)/2+"%",height:.5*a+"vh","margin-top":"0vh"}),s=n.node();Plotly.plot(s,t,i,l),window.onresize=function(){Plotly.Plots.resize(s)}})}e.$inject=["$scope"],angular.module("inspinia").controller("MultilineGraphController",e)}(),function(){function e(){return{restrict:"E",templateUrl:"app/directives/critic-level/critic-level.html",scope:{level:"=?"},controller:["$scope",function(e){var r=5,a=e.level;this.stars=new Array(r).fill(0),this.rating=this.stars.map(function(e,r){return a>r?'<i class="fa fa-star" style="color: rgb(255,128,123)"></i>':'<i class="fa fa-star" style="color: rgba(255,128,123,.4)"></i>'}).join("")}],controllerAs:"vm"}}angular.module("inspinia").directive("criticLevel",e)}(),function(){function e(){return{restrict:"E",scope:{title:"@",addMonitor:"="},templateUrl:"app/directives/band-separator/band-separator.html",controller:function(){},controllerAs:"vm"}}angular.module("inspinia").directive("bandSeparator",e)}(),function(){function e(){}angular.module("inspinia").controller("ServicesController",e)}(),angular.module("inspinia").controller("MainController",function(){var e=this;e.userName="Example user",e.helloText="Welcome in INSPINIA Gulp SeedProject",e.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}),function(){function e(){var e=this;e.titles={performance:"Performance",components:"Componentes instalados",tools:"Herramientas",server:"Servidor y monitores"},e.icons={performance:"fa-bar-chart",components:"fa-puzzle-piece",tools:"fa-code",server:"fa-server"},e.descriptions={performance:"Agrega una descripcion para <strong>performance</strong>",components:"Agrega una descripcion para <strong>components</strong>",tools:"Agrega una descripcion para <strong>tools</strong>",server:"Agrega una descripcion para <strong>server</strong>"}}angular.module("inspinia").controller("InformationCtrl",e)}(),angular.element(document).ready(function(e){function r(){var e=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",e+"px");var r=angular.element("nav.navbar-default").height(),a=angular.element("#page-wrapper").height();r>a&&angular.element("#page-wrapper").css("min-height",r+"px"),a>r&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(r>a?angular.element("#page-wrapper").css("min-height",r+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||r()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),e(function(){r()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("inspinia").run(e)}(),function(){function e(e,r){e.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}),r.otherwise("/index")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(e){return{restrict:"A",link:function(r,a){r.$watch("authentication.user",function(){e(function(){a.metisMenu()})});var o=angular.element('#side-menu a:not([href$="\\#"])');if(o.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var t=a.parent();t.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(e){return{restrict:"A",template:"",controller:["$scope",function(r){angular.element("body").toggleClass("mini-navbar"),r.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),e(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]),function(){function e(e){e.state("index.performance",{url:"/performance",title:"Performance",templateUrl:"app/services/performance/performance.html",controller:"PerformanceController",controllerAs:"vm",sidebarMeta:{icon:"fa-bar-chart",order:800}}).state("index.performance.general",{url:"/general",title:"Performance",templateUrl:"app/services/performance/general/performance.general.html",controller:"GeneralPerformanceController",controllerAs:"vm"}).state("index.performance.organico",{url:"/organic",title:"Performance",templateUrl:"app/services/performance/organico/performance.organico.html",controller:"OrganicPerformanceController",controllerAs:"vm"}).state("index.performance.responsive",{url:"/responsive",title:"Performance",templateUrl:"app/services/performance/responsive/performance.responsive.html",controller:"ResponsivePerformanceController",controllerAs:"vm"}).state("index.performance.graph",{url:"/graph",title:"Performance",templateUrl:"app/services/performance/graph/graph.html"})}e.$inject=["$stateProvider"],angular.module("inspinia").config(e)}(),function(){function e(e){e.state("index.monitores",{url:"/monitores",title:"Monitores",templateUrl:"app/services/monitores/monitores.html",controller:"MonitoresController",controllerAs:"vm",sidebarMeta:{icon:"fa-server",order:800}}).state("index.monitores.general",{url:"/general",title:"Monitores",templateUrl:"app/services/monitores/general/monitores.general.html",controller:"GeneralMonitoresController",controllerAs:"vm"}).state("index.monitores.servidor",{url:"/servidor",title:"Monitores",templateUrl:"app/services/monitores/servidor/monitores.servidor.html",controller:"ServidorMonitoresController",controllerAs:"vm"}).state("index.monitores.blacklist",{url:"/blacklist",title:"Monitores",templateUrl:"app/services/monitores/blacklist/monitores.blacklist.html",controller:"BlackListMonitoresController",controllerAs:"vm"}).state("index.monitores.correos",{url:"/correos",title:"Monitores",templateUrl:"app/services/monitores/correos/monitores.correos.html",controller:"CorreosMonitoresController",controllerAs:"vm"}).state("index.monitores.dns",{url:"/dns",title:"Monitores",templateUrl:"app/services/monitores/dns/monitores.dns.html",controller:"DnsMonitoresController",controllerAs:"vm"}).state("index.monitores.conectividad",{url:"/conectividad",title:"Monitores",templateUrl:"app/services/monitores/conectividad/monitores.conectividad.html",controller:"ConectividadMonitoresController",controllerAs:"vm"})}e.$inject=["$stateProvider"],angular.module("inspinia").config(e)}(),function(){function e(e){e.state("charts.amCharts",{url:"/amCharts",templateUrl:"app/pages/charts/amCharts/charts.html",title:"amCharts",sidebarMeta:{order:0}})}function r(e){var r=e.colors;AmCharts.themes.blur={themeName:"blur",AmChart:{color:r.defaultText,backgroundColor:"#FFFFFF"},AmCoordinateChart:{colors:[r.primary,r.danger,r.warning,r.success,r.info,r.primaryDark,r.warningLight,r.successDark,r.successLight,r.primaryLight,r.warningDark]},AmStockChart:{colors:[r.primary,r.danger,r.warning,r.success,r.info,r.primaryDark,r.warningLight,r.successDark,r.successLight,r.primaryLight,r.warningDark]},AmSlicedChart:{colors:[r.primary,r.danger,r.warning,r.success,r.info,r.primaryDark,r.warningLight,r.successDark,r.successLight,r.primaryLight,r.warningDark],labelTickColor:"#FFFFFF",labelTickAlpha:.3},AmRectangularChart:{zoomOutButtonColor:"#FFFFFF",zoomOutButtonRollOverAlpha:.15,zoomOutButtonImage:"lens.png"},AxisBase:{axisColor:"#FFFFFF",axisAlpha:.3,gridAlpha:.1,gridColor:"#FFFFFF"},ChartScrollbar:{backgroundColor:"#FFFFFF",backgroundAlpha:.12,graphFillAlpha:.5,graphLineAlpha:0,selectedBackgroundColor:"#FFFFFF",selectedBackgroundAlpha:.4,gridAlpha:.15},ChartCursor:{cursorColor:r.primary,color:"#FFFFFF",cursorAlpha:.5},AmLegend:{color:"#FFFFFF"},AmGraph:{lineAlpha:.9},GaugeArrow:{color:"#FFFFFF",alpha:.8,nailAlpha:0,innerRadius:"40%",nailRadius:15,startWidth:15,borderAlpha:.8,nailBorderAlpha:0},GaugeAxis:{tickColor:"#FFFFFF",tickAlpha:1,tickLength:15,minorTickLength:8,axisThickness:3,axisColor:"#FFFFFF",axisAlpha:1,bandAlpha:.8},TrendLine:{lineColor:r.danger,lineAlpha:.8},AreasSettings:{alpha:.8,color:r.info,colorSolid:r.primaryDark,unlistedAreasAlpha:.4,unlistedAreasColor:"#FFFFFF",outlineColor:"#FFFFFF",outlineAlpha:.5,outlineThickness:.5,rollOverColor:r.primary,rollOverOutlineColor:"#FFFFFF",selectedOutlineColor:"#FFFFFF",selectedColor:"#f15135",unlistedAreasOutlineColor:"#FFFFFF",unlistedAreasOutlineAlpha:.5},LinesSettings:{color:"#FFFFFF",alpha:.8},ImagesSettings:{alpha:.8,labelColor:"#FFFFFF",color:"#FFFFFF",labelRollOverColor:r.primaryDark},ZoomControl:{buttonFillAlpha:.8,buttonIconColor:r.defaultText,buttonRollOverColor:r.danger,buttonFillColor:r.primaryDark,buttonBorderColor:r.primaryDark,buttonBorderAlpha:0,buttonCornerRadius:0,gridColor:"#FFFFFF",gridBackgroundColor:"#FFFFFF",buttonIconAlpha:.6,gridAlpha:.6,buttonSize:20},SmallMap:{mapColor:"#000000",rectangleColor:r.danger,backgroundColor:"#FFFFFF",backgroundAlpha:.7,borderThickness:1,borderAlpha:.8},PeriodSelector:{color:"#FFFFFF"},PeriodButton:{color:"#FFFFFF",background:"transparent",opacity:.7,border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",boxSizing:"border-box"},PeriodButtonSelected:{color:"#FFFFFF",backgroundColor:"#b9cdf5",border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",opacity:1,boxSizing:"border-box"},PeriodInputField:{color:"#FFFFFF",background:"transparent",border:"1px solid rgba(0, 0, 0, .3)",outline:"none"},DataSetSelector:{color:"#FFFFFF",selectedBackgroundColor:"#b9cdf5",rollOverBackgroundColor:"#a8b0e4"},DataSetCompareList:{color:"#FFFFFF",lineHeight:"100%",boxSizing:"initial",webkitBoxSizing:"initial",border:"1px solid rgba(0, 0, 0, .3)"},DataSetSelect:{border:"1px solid rgba(0, 0, 0, .3)",outline:"none"}}}e.$inject=["$stateProvider"],r.$inject=["baConfigProvider"],angular.module("inspiniaCharts",["inspinia"]).config(e).config(r)}(),function(){function e(e){e.state("services",{url:"/services",title:"Servicios",templateUrl:"app/pages/services/services.html"})}e.$inject=["$stateProvider"],angular.module("inspinia").config(e)}(),function(){function e(e){e.state("index.information",{url:"/information",title:"Información",templateUrl:"app/information/information.html",controller:"InformationCtrl",controllerAs:"vm"})}e.$inject=["$stateProvider"],angular.module("inspinia").config(e)}(),function(){function e(e){e.state("charts",{url:"/charts","abstract":!0,template:'<div ui-view  autoscroll="true" autoscroll-body-top></div>',title:"Charts"})}e.$inject=["$stateProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").run(["$templateCache",function(e){e.put("app/information/information.html",'<div class="wrapper wrapper-content animated fadeIn"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-class="xmedium-panel"><div class="row"><div class="col-lg-12 col-md-12 m-b-md"><h1 class="">Te ayudamos a medir varios indicadores web</h1></div><div class="row"><div class="col-md-5 col-md-offset-1"><selector title="vm.titles.performance" icon="vm.icons.performance" description="vm.descriptions.performance" target="index.performance.graph"></selector></div></div></div></div></div></div></div>'),e.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}} </h1><small>{{main.descriptionText}}  <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),e.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),e.put("app/services/services.html",'<div class="row"><div class="col-md-12"><ui-view></ui-view></div></div>'),e.put("app/charts/amCharts/charts.html",'<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Combined bullet/column and line graphs with multiple value axes" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/combinedChart/combinedChart.html\'"></div></div></div></div>'),e.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),e.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div>'),e.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),e.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="logo-element">IN+</div></li><li ui-sref-active="active"><a ui-sref="index.information"><i class="fa fa-info"></i> <span class="nav-label">Información</span></a></li></ul></div></nav>'),e.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"><li><a href=""><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>'),e.put("app/directives/band-separator/band-separator.html",'<div class="row band-separator"><div class="col-md-4"><h2>{{ title }}</h2></div><div class="col-md-4 pull-right"><div class="upgrade"><span><input type="button" class="btn btn-default-focus pull-right" value="Agregar monitor" ng-click="addMonitor()"></span></div></div></div><hr>'),e.put("app/directives/critic-level/critic-level.html",'<div><p><strong>Nivel de criticidad:</strong> <span ng-bind-html="vm.rating"></span> <span class="text-default" ng-if="level < 2">Muy bajo</span> <span class="text-danger" ng-if="level >= 2">Muy alto</span></p></div>'),e.put("app/directives/progress-bar/progress-bar.html",'<div><h3>{{ text }}</h3><div class="progress"><div class="progress-bar progress-bar-{{type || \'default\'}}" role="progressbar" aria-valuenow="{{ value }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ value }}%">{{value}}% Completado ({{value>90?\'exitoso\':\'puede mejorar\'}})</div></div></div>'),e.put("app/directives/selector/selector.html",'<div class="panel panel-medium" style="cursor: pointer"><div class="panel-heading" style="height: 100%" ui-sref="{{ target }}"><h3 class="panel-title">{{ title }}</h3></div><div class="panel-body" ng-init="showIcon=true"><div style="width: 100%; background: #0e83929a; display: flex; justify-content: center;"><i class="fa {{icon}}" style="font-size: 10em" ng-show="showIcon"></i><div style="height: 150px"><p class="animated fadeInRight" ng-bind-html="description"></p></div></div></div></div>'),e.put("app/directives/server-state/server-state.html",'<div class="col-md-12" ba-panel="" ba-panel-title="{{ vm.server.url }}" ba-panel-class="with-scroll"><div class="row"><div class="col-md-8">{{ vm.server.info }}</div><div class="col-md-4"><span class="{{ server.icon.name }} fa-4x" style="color: {{server.icon.color}}"></span></div><div class="col-md-12"><hr style="border-color: {{server.icon.color}}; border-width: 10px; margin-top: 30px"></div><div class="col-md-12"><p class="text-center"><strong style="color: {{server.icon.color}}">{{ server.status }}</strong> <span class="fa fa-search pull-right" ng-click="remove()"></span></p></div></div></div>'),e.put("app/services/monitores/monitores.html",'<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12 button-container"><div class="row"><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.general">Inf general</button></div></div><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.servidor">Servidores</button></div></div><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.blacklist">Lista negra</button></div></div><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.correos">Correos</button></div></div><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.dns">DNS</button></div></div><div class="col-md-2 col-sm-2 col-xs-4"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control over-hide" ui-sref="index.monitores.conectividad">Conectividad</button></div></div></div></div><div class="col-md-12 m-t-lg"><ui-view></ui-view></div></div></div></div>'),e.put("app/services/performance/performance.html",'<div class="row m-t-md m-b-lg"><div class="col-md-12"><div class="row wrapper border-bottom white-bg page-heading"><div class="col-md-10 col-md-offset-1 wrapper"><h1>Información</h1><small ui-sref="index.information">< Volver</small><div class="row m-t-md"><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="index.performance.graph">Resumen</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="index.performance.general">Evaluación general</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="index.performance.responsive">Diseño responsive</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="index.performance.organico">P.Orgánico</button></div></div></div></div></div><div class="wrapper wrapper-content"><ui-view></ui-view></div></div></div>'),e.put("app/charts/amCharts/combinedChart/combinedChart.html",'<div id="zoomAxisChart" class="admin-chart" ng-controller="combinedChartCtrl"></div>'),e.put("app/services/monitores/blacklist/monitores.blacklist.html",'<div class="col-md-12" ba-panel="" ba-panel-title="Blacklist" ba-panel-class="with-scroll"><h1>Informacion para comenzar</h1></div>'),e.put("app/services/monitores/conectividad/monitores.conectividad.html",'<div class="col-md-12" ba-panel="" ba-panel-title="Conectividad" ba-panel-class="with-scroll"><h1>Informacion para comenzar</h1></div>'),e.put("app/services/monitores/correos/monitores.correos.html",'<div class="col-md-12" ba-panel="" ba-panel-title="Servidores de Correo" ba-panel-class="with-scroll"><h1>Informacion para comenzar</h1></div>'),e.put("app/services/monitores/correos/performance.html",'<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-10 col-md-offset-1 button-container"><div class="row"><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="services.performance.graph">Resumen</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="services.performance.general">Evaluación general</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="services.performance.responsive">Diseño responsive</button></div></div><div class="col-md-3 col-sm-3 col-xs-6"><div class="button-wrapper"><button type="button" class="btn btn-primary form-control" ui-sref="services.performance.organico">P.Orgánico</button></div></div></div></div><div class="col-md-12"><ui-view></ui-view></div></div></div></div>'),e.put("app/services/monitores/dns/monitores.dns.html",'<div class="col-md-12" ba-panel="" ba-panel-title="dns" ba-panel-class="with-scroll"><h1>Informacion para comenzar</h1></div>'),e.put("app/services/monitores/general/monitores.general.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="ibox"><div class="row"><div class="col-md-12"><progress-bar2 value="vm.generalEvaluation" text="Información general"></progress-bar2><div class="row"><div class="col-md-12"><critic-level level="vm.criticLevel"></critic-level></div></div></div></div><div class="row"><div class="col-md-12"><band-separator title="Estado del servidor" add-monitor="vm.addMonitor"></band-separator><div class="row" ba-panel="" ng-if="vm.serverStates.length"><div class="col-md-12 server-state-container"><div class="row"><div class="col-md-4" ng-repeat="server in vm.serverStates"><div class="row"><server-state server="server" remove-server="vm.removeMonitor($index)"></server-state></div></div></div></div></div></div><div class="col-md-12"><band-separator title="Estado del servidor"></band-separator></div></div></div></div>'),e.put("app/services/monitores/servidor/monitores.servidor.html",'<div class="col-md-12" ba-panel="" ba-panel-title="Servidores" ba-panel-class="with-scroll"><h1>Informacion para comenzar</h1></div>'),e.put("app/services/performance/general/performance.general.html",'<div class="col-md-12 animated fadeIn"><div class="ibox e-margin-float"><div class="ibox-title"><h1>Desempeño general</h1></div><div class="ibox-content"><div class="row"><div class="col-md-12"><progress-bar2 value="vm.generalEvaluation" text="Evaluación general"></progress-bar2><div class="row"><div class="col-md-12"><critic-level level="vm.criticLevel"></critic-level></div></div></div><div class="col-md-12"><h2>Resultados de la evaluación</h2><div class="row"><div class="col-md-12"><div class="table-responsive"><table class="table table-striped"><tr><th>Elemento</th><th>Caracteristicas Evaluadas</th><th>Score actual</th><th>Score recomendado</th><th><span class="fa fa-info"></span></th><th>Acciones</th></tr><tr><td>Accesibilidad</td><td>Correcta asignacion de tags</td><td>70</td><td>85</td><td><span class="fa fa-check" style="color: #008000"></span></td><td><span class="fa fa-search"></span></td></tr></table></div></div></div></div></div></div></div></div>'),e.put("app/services/performance/graph/graph.html",'<div class="col-md-12 animated fadeIn"><div class="ibox e-margin-float"><div class="ibox-title"><h1>Resumen</h1></div><div class="ibox-content"><div class="row"><div class="col-md-12"><multiline-graph id="primerGrafico" data="vm.data"></multiline-graph></div></div></div></div></div>'),e.put("app/services/performance/organico/performance.organico.html",'<div class="col-md-12 animated fadeIn"><div class="ibox e-margin-float"><div class="ibox-title"><h1>Desempeño general</h1></div><div class="ibox-content"><div class="row"><div class="col-md-12"><critic-level level="vm.criticLevel"></critic-level></div><div class="col-md-12"><h2>Resultados de la evaluación</h2><div class="row"><div class="col-md-12"><div class="table-responsive"><table class="table table-striped"><tr><th>Elemento</th><th>Resultado</th><th>Estándar recomendado</th><th><span class="fa fa-info"></span> Evaluación</th><th>Acciones</th></tr><tr><td>¿El sitio web utiliza tablas?</td><td>No</td><td>No es recomendable usar tablas en su portal</td><td><span class="fa fa-check" style="color: #008000"></span></td><td><span class="fa fa-search"></span></td></tr></table></div></div></div></div></div></div></div></div>'),
e.put("app/services/performance/responsive/performance.responsive.html",'<div class="col-md-12 animated fadeIn"><div class="ibox e-margin-float"><div class="ibox-title"><h1>Desempeño general</h1></div><div class="ibox-content"><div class="row"><div class="col-md-12"><progress-bar2 value="vm.generalEvaluation" text="Vista previa dispositivos móviles"></progress-bar2><div class="row"><div class="col-md-12"><critic-level level="vm.criticLevel"></critic-level></div><div class="col-md-12"><div><h1 class="text-center">Por definir</h1></div></div><div class="col-md-12" style="margin-top: 15px"><progress-bar2 value="vm.generalEvaluation" text="Vista previa otras pantallas"></progress-bar2><div class="row"><div class="col-md-12"><critic-level level="vm.criticLevel"></critic-level></div><div class="col-md-12"><div><h1 class="text-center">Por definir</h1></div></div></div></div></div></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-f012c7dbaa.js.map
