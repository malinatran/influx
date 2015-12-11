var user = null;

$(function() {

  /////////////////////////////////
  // LOGIN AND SIGNUP /////////////
  /////////////////////////////////

  // Need to create login-template
  var renderLoginForm = function() {
    var template = Handlebars.compile($('#login-template').html());
    $('#display-container').append(template);
  };


  var submitLoginForm = function() {
    var usernameInput = $("input[name='username']").val();
    var passwordInput = $("input[name='password']").val();
    var user = {
      username: usernameInput,
      password: passwordInput
    };
    $.post('/login', user).done(function(data) {
      if (data) {
        viewStoryMap();
      } else {
        alert("Wrong username and/or password. Please re-enter your information.");
        renderLoginForm();
      };
    });
  };

  // Need to create signup-template
  var renderSignupForm = function() {
    var template = Handlebars.compile($('#signup-template').html());
    $('#display-container').append(template);
  };

  var submitSignupForm = function() {
    var submitSignupForm = function() {
    var usernameInput = $("input[name='username']").val();
    var passwordInput = $("input[name='password']").val();
    var user = {
      username: usernameInput,
      password: passwordInput
    }
    $.post('/users', user).done(createUser);
  };

  var createUser = function() {
    user = Cookies.get('loggedInId');
    viewStoryMap();
  };

  var logoutUser = function() {
    Cookies.remove('loggedInId');
    window.location = '/';
  };

  var viewStoryMap = function() {

  };

}); 
