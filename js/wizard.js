/*global $*/
$(':input').change(function(event) {
  var $target;
  $target = $(event.target);
  measure({
    event: 'inputChange',
    fieldName: $("label[for=" + $target.attr("id") + "]").text(),
    fieldValue: $target.val()
  });
});
