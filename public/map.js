var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 39.995766, lng: -98.008874},
    zoom: 4,
    scrollwheel: false,
    disableDefaultUI: true
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h5 id="firstHeading" class="firstHeading">Brooklyn, New York</h5>'+
    '<div id="bodyContent">'+
    '<p>I’m different than other people. I’m never sad. I make my life happy through discipline.' +
    'I don’t drink, I don’t smoke, and I eat lots of fiber. Every day I take a walk in the park ' + 
    'to think about my balance. I’ve been a chef, a fashion designer, a painter, and now I’m ' + 
    'learning martial arts. I do Tai Chi in the park every morning. It helps give me energy for ' +
    'my painting. I have already learned forty-two moves. I’m ahead of everyone. I’m almost ' + 
    'eighty years old, but all the women in my group think I’m in my fifties.</p>'
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker ({
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    position: {lat: 40.657904, lng: -73.959922},
    title: "Current home"
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  // var stylesArray = [
  //   {
  //       "featureType": "administrative",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //           {
  //               "color": "#444444"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "landscape",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "color": "#f2f2f2"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "poi",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "visibility": "off"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "road",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "saturation": -100
  //           },
  //           {
  //               "lightness": 45
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "road",
  //       "elementType": "geometry.stroke",
  //       "stylers": [
  //           {
  //               "visibility": "off"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "road.highway",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "visibility": "simplified"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "road.arterial",
  //       "elementType": "labels.icon",
  //       "stylers": [
  //           {
  //               "visibility": "off"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "transit",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "visibility": "off"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "water",
  //       "elementType": "all",
  //       "stylers": [
  //           {
  //               "color": "#cfcfcf"
  //           },
  //           {
  //               "visibility": "on"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "water",
  //       "elementType": "geometry.fill",
  //       "stylers": [
  //           {
  //               "color": "#cbf0f2"
  //           }
  //       ]
  //   },
  //   {
  //       "featureType": "water",
  //       "elementType": "labels.text.fill",
  //       "stylers": [
  //           {
  //               "color": "#000000"
  //           }
  //       ]
  //   }
  // ];

  // var styledMap = new google.maps.StyledMapType(stylesArray,
  //   {name: "Styled Map"});

  // var mapOptions = {
  //   zoom: 11,
  //   center: new google.maps.LatLng(55.6468, 37.581),
  //   mapTypeControlOptions: {
  //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  //   }
  // };
  // var map = new google.maps.Map(document.getElementById('map'),
  //   mapOptions);

  // map.mapTypes.set('map_style', styledMap);
  // map.setMapTypeId('map_style');

};


// var initialize = function() {
//   var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     zoom: 12,
//     streetViewControl: false,
//     mapTypeControl: false,
//     center: new google.maps.LatLng(40.696829, -73.935232),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var marker1 = new google.maps.Marker ({
//     map: map,
//     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//     position: {lat: 40.657904, lng: -73.959922},
//     title: "Current home"
//   });

//   var marker2 = new google.maps.Marker ({
//     map: map,
//     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//     position: {lat: 40.693805, lng: -73.956148},
//     title: "First apt in Brooklyn!"
//   });

//   var marker3 = new google.maps.Marker ({
//     map: map,
//     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//     position: {lat: 40.650615, lng: -73.964604},
//     title: "First apt in Brooklyn!"
//   });

//   var marker4 = new google.maps.Marker ({
//     map: map,
//     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//     position: {lat: 40.673572, lng: -73.957679},
//     title: "First apt in Brooklyn!"
//   });

// };

// google.maps.event.addDomListener(window,'load', initialize);