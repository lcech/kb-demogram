$(':input[data-fieldname]').change(function(event) {
  var $target;
  $target = $(event.target);
  measure({
    event: 'inputChange',
    fieldName: $target.attr('name'),
    fieldValue: $target.val()
  });
});