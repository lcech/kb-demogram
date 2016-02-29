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

    measure({event: "loginFormSent", form: $(this).serializeObject()});
    this.reset();
  });

  $("#leadForm").on("submit", function(event) {
    event.preventDefault();

    measure({event: "leadFormSent", form: $(this).serializeObject()});
    this.reset();
  });

  $(".download").on("click", function(event) {
    var $target,
      linkHref,
      fileType;

    event.preventDefault();

    $target = $(event.target);
    linkHref = $target.attr("href");
    fileType = linkHref.split(".").pop().toUpperCase();

    measure({event: "fileDownload", fileName: linkHref, fileType: fileType});
    setTimeout(function() {
      window.location = linkHref;
    }, 500);
  });


})(jQuery);