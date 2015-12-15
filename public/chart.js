$(function() { 

  // Work in progress: stylizing tagline
  // var randLetter = Math.floor((Math.random()*30)+1);
  // var randColor = Math.floor((Math.random()*3)+1);
  // var colors = ['#FBAE17', '#0095A3', '#A63E14', '#FBAE17'];
  // var $text = $('#tagline').text();
  // var $textSplit = $text.split('');
  // var $selectedLetter = $textSplit[randLetter];
  // var selectedColor = colors[randColor];
  // console.log($selectedLetter);

  Highcharts.getOptions().plotOptions.pie.colors = (function () {
    var colors = [],
    base = Highcharts.getOptions().colors[0],
    i;

    for (i = 0; i < 10; i += 1) {
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());

  ////////////////////////////////////
  ///////////// Origin //////////////
  //////////////////////////////////

  $('#origin-container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Origin'
    },
    xAxis: {
      categories: ['1990', '2000', '2010']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Origin'
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

  ////////////////////////////////////
  //////// Race + Ethnicity /////////
  //////////////////////////////////

  $('#race-container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Race and Ethnicity'
    },
    subtitle: {
      text: 'Source: U.S. Census Bureau'
    },
    xAxis: {
      categories: ['White', 'Black or African-American', 'American Indian & Alaska Native', 'Asian', 'Native Hawaiian & Other Pacific Islander', 'Some Other Race', 'Two or More Races', 'Hispanic or Latino' ],
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
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
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
      text: 'Age (1990)'
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
    ageChart.highcharts().setTitle({text: 'Age (1990)'});
    ageChart.highcharts().series[0].setData([ 
     7.54, 21.30, 7.69, 25.33, 17.14, 8.49, 11.28, 1.21
     ], true);
  });

  $('#age-2000-btn').on('click', function(e) {
    ageChart.highcharts().setTitle({text: 'Age (2000)'});
    ageChart.highcharts().series[0].setData([
      6.81, 21.78, 6.74, 14.18, 29.43, 8.63, 10.93, 1.51
      ], true);
  });

  $('#age-2010-btn').on('click', function(e) {
    ageChart.highcharts().setTitle({text: 'Age (2010)'});
    ageChart.highcharts().series[0].setData([
      6.54, 20.43, 6.99, 13.30, 27.88, 11.82, 11.26, 1.78
      ], true);
  });

});