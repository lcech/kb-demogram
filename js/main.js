//global jQuery
(function($) {
  // Demo itself features
  $("#loginForm").on("submit", function(event) {
    event.preventDefault();
    console.log($(event.target).serialize());
  });
  $("#leadForm").on("submit", function(event) {
    event.preventDefault();
    console.log($(event.target).serialize());
  });

})(jQuery);
