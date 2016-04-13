$(':input[data-fieldname]').change(function(event) {
  var $target;
  $target = $(event.target);
  measure({
    event: 'inputChange',
    fieldName: $target.data('fieldname'),
    fieldValue: $target.val()
  });
});
