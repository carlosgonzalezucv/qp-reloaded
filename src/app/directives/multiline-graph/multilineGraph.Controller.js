(function(){
  'use strict';
  angular.module('inspinia').controller('MultilineGraphController', MultiLineGraphController);

  function MultiLineGraphController ($scope) {
    var vm = this,
        domain = new Array(100).fill(0).map((e,i) => (2*Math.PI*(i/100)));
    var trace1 = {
      x: domain, 
      y: domain.map(Math.sin), 
      name: 'Sin(t)',
      type: 'scatter'
    };
    var trace2 = {
      x: domain, 
      y: domain.map(e => Math.cos(3*e)), 
      name: 'Cos(3t)',
      type: 'scatter'
    };
    var data = [trace1, trace2],
    layout = {
      title: 'Una grafica de prueba',
      font:{
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
        anchor: 'free',
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
    
    $( document ).ready( () => {
      var WIDTH_IN_PERCENT_OF_PARENT = 90,
        HEIGHT_IN_PERCENT_OF_PARENT = 90,
        d3 = Plotly.d3,
        gd3 = d3.select("#" + $scope.id)
        .append('div')
        .style({
          width: 1 * WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',  
          height: .5 * HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': 0+ 'vh'
        }),
        gd = gd3.node();
      Plotly.plot(gd, data, layout, options);
      window.onresize = function() {
        Plotly.Plots.resize(gd);
      };
    });    
  }
})();