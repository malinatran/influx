$(function() { 

  $('.carousel').each(function(){
    $(this).carousel({
      interval: false
    });
  });

  Highcharts.getOptions().plotOptions.pie.colors = (function () {
    var colors = [],
    base = '#26767d',
    i;

    for (i = 7; i >= 0; i--) {
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }

    return colors;
  }());

  Highcharts.createElement('link', {
   rel: 'stylesheet',
   type: 'text/css'
  }, null, document.getElementsByTagName('head')[0]);

  Highcharts.theme = {
     colors: ["#d3d3d3", "#0095A3"],
     chart: {
        backgroundColor: {
           linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
           stops: [
              [0, '#FFF'],
              [1, '#FFF']
           ]
        },
        style: {
           fontFamily: "'Karla', sans-serif"
        },
        plotBorderColor: '#606063'
     },
     title: {
        style: {
           color: '#000',
           fontSize: '30px'
        }
     },
     subtitle: {
        style: {
           color: '#000',
        }
     },
     xAxis: {
        gridLineColor: '#000',
        labels: {
           style: {
              color: '#000'
           }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
           style: {
              color: '#A0A0A3'

           }
        }
     },
     yAxis: {
        gridLineColor: '#707073',
        labels: {
           style: {
              color: '#000'
           }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
           style: {
              color: '#A0A0A3'
           }
        }
     },
     tooltip: {
        backgroundColor: '#FFF',
        style: {
           color: '#000'
        }
     },
     plotOptions: {
        series: {
           dataLabels: {
              color: '#B0B0B3'
           },
           marker: {
              lineColor: '#333'
           }
        },
        boxplot: {
           fillColor: '#505053'
        },
        candlestick: {
           lineColor: 'white'
        },
        errorbar: {
           color: 'white'
        }
     },
     legend: {
        itemStyle: {
           color: '#000'
        },
        itemHoverStyle: {
           color: '#000'
        },
        itemHiddenStyle: {
           color: '#606063'
        }
     },
     credits: {
        style: {
           color: '#FFF'
        }
     },
     labels: {
        style: {
           color: '#FFF'
        }
     },

     drilldown: {
        activeAxisLabelStyle: {
           color: '#F0F0F3'
        },
        activeDataLabelStyle: {
           color: '#F0F0F3'
        }
     },

     navigation: {
        buttonOptions: {
           symbolStroke: '#DDDDDD',
           theme: {
              fill: '#505053'
           }
        }
     },

     // scroll charts
     rangeSelector: {
        buttonTheme: {
           fill: '#505053',
           stroke: '#000000',
           style: {
              color: '#CCC'
           },
           states: {
              hover: {
                 fill: '#707073',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              },
              select: {
                 fill: '#000003',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              }
           }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
           backgroundColor: '#333',
           color: 'silver'
        },
        labelStyle: {
           color: 'silver'
        }
     },

     navigator: {
        handles: {
           backgroundColor: '#666',
           borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
           color: '#7798BF',
           lineColor: '#A6C7ED'
        },
        xAxis: {
           gridLineColor: '#505053'
        }
     },

     scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
     },

     // special colors for some of the
     legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
     background2: '#505053',
     dataLabelsColor: '#B0B0B3',
     textColor: '#C0C0C0',
     contrastTextColor: '#F0F0F3',
     maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  ////////////////////////////////////
  ///////////// Origin //////////////
  //////////////////////////////////

  $('#origin-container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'In pursuit of the American Dream',
      fontSize: '30px'
    },
    xAxis: {
      categories: ['1990', '2000', '2010']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Native Born',
      data: [92.10, 88.95, 87.08]
    }, {
      name: 'Foreign Born',
      data: [7.90, 11.05, 12.92]
    }]
  });

  Highcharts.createElement('link', {
   rel: 'stylesheet',
   type: 'text/css'
  }, null, document.getElementsByTagName('head')[0]);

  Highcharts.theme = {
     colors: ["#0095A3", "#FBAE17", "#B3461A"],
     chart: { 
        backgroundColor: {
           linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
           stops: [
              [0, '#FFF'],
              [1, '#FFF']
           ]
        },
        style: {
           fontFamily: "'Karla', sans-serif"
        },
        plotBorderColor: '#606063'
     },
     title: {
        style: {
           color: '#000',
           fontSize: '30px'
        }
     },
     subtitle: {
        style: {
           color: '#000',
        }
     },
     xAxis: {
        gridLineColor: '#000',
        labels: {
           style: {
              color: '#000',
              fontSize: '16px'
           }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
           style: {
              color: '#A0A0A3'

           }
        }
     },
     yAxis: {
        gridLineColor: '#000',
        labels: {
           style: {
              color: '#000',
              fontSize: '16px'
           }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
           style: {
              color: '#A0A0A3'
           }
        }
     },
     tooltip: {
        backgroundColor: '#FFF',
        style: {
           color: '#000'
        }
     },
     plotOptions: {
        series: {
           dataLabels: {
              color: '#000'
           },
           marker: {
              lineColor: '#000'
           }
        },
        boxplot: {
           fillColor: '#505053'
        },
        candlestick: {
           lineColor: 'white'
        },
        errorbar: {
           color: 'white'
        }
     },
     legend: {
        itemStyle: {
           color: '#000',
           fontSize: '12px'
        },
        itemHoverStyle: {
           color: '#000'
        },
        itemHiddenStyle: {
           color: '#606063'
        }
     },
     credits: {
        style: {
           color: '#FFF'
        }
     },
     labels: {
        style: {
           color: '#707073'
        }
     },

     drilldown: {
        activeAxisLabelStyle: {
           color: '#F0F0F3'
        },
        activeDataLabelStyle: {
           color: '#F0F0F3'
        }
     },

     navigation: {
        buttonOptions: {
           symbolStroke: '#DDDDDD',
           theme: {
              fill: '#505053'
           }
        }
     },

     // scroll charts
     rangeSelector: {
        buttonTheme: {
           fill: '#505053',
           stroke: '#000000',
           style: {
              color: '#CCC'
           },
           states: {
              hover: {
                 fill: '#707073',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              },
              select: {
                 fill: '#000003',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              }
           }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
           backgroundColor: '#333',
           color: 'silver'
        },
        labelStyle: {
           color: 'silver'
        }
     },

     navigator: {
        handles: {
           backgroundColor: '#666',
           borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
           color: '#7798BF',
           lineColor: '#A6C7ED'
        },
        xAxis: {
           gridLineColor: '#505053'
        }
     },

     scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
     },

     // special colors for some of the
     legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
     background2: '#505053',
     dataLabelsColor: '#B0B0B3',
     textColor: '#C0C0C0',
     contrastTextColor: '#F0F0F3',
     maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  ////////////////////////////////////
  //////// Race + Ethnicity /////////
  //////////////////////////////////

  $('#race-container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'A diverse and diversifying country'
    },
    // subtitle: {
    //   text: 'Source: U.S. Census Bureau'
    // },
    xAxis: {
      categories: ['White', 'Black or African-American', 'American Indian & Alaska Native', 'Asian', 'Native Hawaiian & Pacific Islander', 'Some Other Race', 'Two or More Races', 'Hispanic or Latino' ],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 0,
      y: 50,
      floating: false,
      borderWidth: 1,
      backgroundColor: ('#FFF'),
      shadow: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '1990',
      data: [75.64, 11.75, 0.72, 2.67, 0.13, 0.10, 0, 8.99]
    }, {
      name: '2000',
      data: [69.13, 12.06, 0.74, 3.60, 0.13, 0.17, 1.64, 12.55]
    }, {
      name: '2010',
      data: [63.75, 12.21, 0.73, 4.69, 0.16, 0.20, 1.93, 16.35]
    }]
  });

  ////////////////////////////////////
  ////////// Multiracial ////////////
  //////////////////////////////////

  $('#multiracial-container').highcharts({
    chart: {
      type: 'line'
    },
    title: {
      text: 'A more multiracial nation'
    },
    xAxis: {
      categories: ['1970', '1980', '1990', '2000', '2010']
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: '% of children younger than one year old who are multiracial',
      data: [1, 3, 5, 9, 10]
    }]
  });


  ////////////////////////////////////
  ////////////// Age ////////////////
  //////////////////////////////////

  var ageChart = $('#age-container').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'A rise in the aging population'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Orign',
      data: [
      { name: 'Under 5 years', y: 7.54 },
      { name: '5 - 19 years', y: 21.30 },
      { name: '20 - 24 years', y: 7.69 },
      { name: '25 - 39 years', y: 25.33 },
      { name: '40 - 54 years', y: 17.14 },
      { name: '55 - 64 years', y: 8.49 },
      { name: '65 - 84 years', y: 11.28 },
      { name: '85 years and older', y: 1.21 }
      ]
    }]
  });

  $('#age-1990-btn').on('click', function(e) {
    $('#age-btn-container .active').removeClass('active');
    $(this).addClass('active');
    ageChart.highcharts().series[0].setData([ 
     7.54, 21.30, 7.69, 25.33, 17.14, 8.49, 11.28, 1.21
     ], true);
  });

  $('#age-2000-btn').on('click', function(e) {
    $('#age-btn-container .active').removeClass('active');
    $(this).addClass('active');
    ageChart.highcharts().series[0].setData([
      6.81, 21.78, 6.74, 14.18, 29.43, 8.63, 10.93, 1.51
      ], true);
  });

  $('#age-2010-btn').on('click', function(e) {
    $('#age-btn-container .active').removeClass('active');
    $(this).addClass('active');
    ageChart.highcharts().series[0].setData([
      6.54, 20.43, 6.99, 13.30, 27.88, 11.82, 11.26, 1.78
      ], true);
  });



});