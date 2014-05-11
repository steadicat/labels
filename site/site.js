function done() {
  $(this).removeClass('loading');
  sh_highlightDocument();
}
function jsDone(data) {
  done.call($('#javascript').text(data)[0]);
}
$(function() {
  $.get('labels.js', jsDone);
  $('#css').load('labels.css', done);
});
