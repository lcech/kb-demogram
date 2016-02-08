//global jQuery
(function($) {
  // Demo itself features
  $("#loginForm").on("submit", function(event) {
    event.preventDefault();
    console.log("Login Form Submitted");
  });

})(jQuery);
