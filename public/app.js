$(function() {
  $("#file_input").on("change", function() {
    var files = this.files;
    var file = files[0];
    if (file == null) {
      alert("No file selected.");
    } else {
      console.log(file);
      get_signed_request(file);
    }
  });

  function get_signed_request(file) {
    $.get("/sign_s3?file_name="+file.name+"&file_type="+file.type).done(function(response) {
      console.log(response);
      upload_file(file, response.signed_request, response.url);
    });
  }

  function upload_file(file, signed_request, url) {
    $.ajax({
      url: signed_request,
      method: "PUT",
      header: {
        'x-amz-acl': 'public-read'
      },
      data: file,
      processData: false
    }).done(function() {
      $("#image_url").val(url);
    });
  }

});
