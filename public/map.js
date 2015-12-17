$(function() {

  var map;

  var styles = 
  [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
    {
      "color": "#444444"
    }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
    {
      "color": "#f2f2f2"
    }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
    {
      "saturation": -100
    },
    {
      "lightness": 45
    }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "simplified"
    }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
    {
      "color": "#cfcfcf"
    },
    {
      "visibility": "on"
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
    {
      "color": "#cbf0f2"
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
    {
      "color": "#000000"
    }
    ]
  }
  ];

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 39.995766, lng: -98.008874},
    zoom: 4,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  });

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var oms = new OverlappingMarkerSpiderfier(map);
  var iw = new google.maps.InfoWindow();
  oms.addListener('click', function(marker, event) {
    iw.setContent(marker.desc);
    iw.open(map, marker);
  });
  oms.addListener('spiderfy', function() {
    iw.close();
  });

  $('.google-map-stories').each(function(i, story) {
    var lat = $(story).data('lat');
    var lng = $(story).data('lng');
    var marker = new google.maps.Marker ({
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      position: {lat: lat, lng: lng}
    });
    marker.desc = story.innerHTML;
    oms.addMarker(marker);
  });

});

