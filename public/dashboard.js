$(function() {

  $(".file_input").on("change", function() {
    var files = this.files;
    var file = files[0];
    var story_id = $(this).data('story-id');
    if (file !== null) {
      get_signed_request(file, story_id);
      $(".update-btn").prop("disabled", true);
      $(".submit-btn").prop("disabled", true);
    }
  });

  function get_signed_request(file, story_id) {
    $.get("/sign_s3?file_name="+file.name+"&file_type="+file.type).done(function(response) {
      console.log(response);
      upload_file(file, response.signed_request, response.url, story_id);
    });
  };

  function upload_file(file, signed_request, url, story_id) {
    $.ajax({
      url: signed_request,
      method: "PUT",
      header: {
        'x-amz-acl': 'public-read'
      },
      data: file,
      processData: false,
      contentType: false
    }).done(function() {
      if (story_id) {
        $("#story-modal-edit-" + story_id + " .image_url").val(url);
      } else {
        $("#story-modal .image_url").val(url);
      }
      $(".update-btn").prop("disabled", false);
      $(".submit-btn").prop("disabled", false);
    });
  };

  window.initMap = function() {
    var $location = $('.location');
    var options = {
      componentRestrictions: {country: 'fr'}
    }
    $location.each(function(i, location) {
      var autocomplete = new google.maps.places.Autocomplete(location);
      autocomplete.addListener('place_changed', function() {
        var lat = autocomplete.getPlace().geometry.location.lat();
        var lng = autocomplete.getPlace().geometry.location.lng();
        $location.siblings('.lat').val(lat);
        $location.siblings('.lng').val(lng);
      });
    });
    $location.on('keydown', function(e) {
      if (e.which === 13) {
        e.preventDefault();
      }
    });
  };

});
