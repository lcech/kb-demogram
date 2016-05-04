/*global digitalData,$*/
digitalData.formId = $("h1").text();
digitalData.formStep = $("p.progress-state").find(".active").find(".ico").last().text();
$(':input').change(function(event) {
  var $target;
  $target = $(event.target);
  measure({
    event: 'inputChange',
    fieldName: $("label[for=" + $target.attr("id") + "]").text(),
    fieldValue: $target.val()
  });
});
