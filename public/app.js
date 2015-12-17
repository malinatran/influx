$(function() {

 // Click function for user to favorite
  $('body').on('click', '#like', function() {
    console.log('clicked');
    $(this).css('color', 'red');
    var storyId = $(this).data('id');
    console.log(storyId);
    $.ajax({
      url: "/users", 
      type: "PUT",
      data: { storyId: storyId }
    })
  });

  // Change colors in tagline
  $('#tagline').lettering();
  var taglineText = $('#tagline').text();
  var length = taglineText.length;
  console.log(length);

  setInterval(function() {
    var index1 = Math.floor(Math.random()*length)+1;
    var index2 = Math.floor(Math.random()*length)+1;
    if (index1 == index2) {
      if (index1 == 0) {
        index2 = length;
      } else {
        index2 -= 1;
      }
    }
    if (taglineText[index1-1] == " ") {
      index1 += 1;
    }
    if (taglineText[index2-1] == " ") {
      index2 -= 1;
    }
    $('.color-text').removeClass('color-text');
    $('.char' + index1).addClass('color-text');
    $('.char' + index2).addClass('color-text');
  }, 1000);

});
