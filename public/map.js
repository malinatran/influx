$(function() {
  var map;

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 39.995766, lng: -98.008874},
    zoom: 4,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false
  });

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
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      position: {lat: lat, lng: lng}
    });
    marker.desc = story.innerHTML;
    oms.addMarker(marker);
  });

});

