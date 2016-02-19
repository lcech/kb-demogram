var dataLayer = dataLayer || [];
//global jQuery
(function($) {
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  // Demo itself features
  $("#loginForm").on("submit", function(event) {
    event.preventDefault();
    console.log($(this).serializeObject());
    dataLayer.push({"event": "loginFormSent", "form": $(this).serializeObject()});
    this.reset();
  });
  $("#leadForm").on("submit", function(event) {
    event.preventDefault();
    console.log($(this).serializeObject());
    dataLayer.push({"event": "leadFormSent", "form": $(this).serializeObject()});
    this.reset();
  });

})(jQuery);
