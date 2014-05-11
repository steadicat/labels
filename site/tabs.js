var defaultPage = '#info';

function checkHash() {
  $($('.tabs li.active').removeClass('active').find('a').attr('href')).css('display','none');
  var hash = window.location.hash || defaultPage;
  $(hash).css('display', 'block');
  $('a[href='+hash+']').parent().addClass('active');
}

function checkHashInAMinute() {
  setTimeout(checkHash, 0);
}
$(document).on('click', 'a', checkHashInAMinute);

$(function() {
  $('.page').css('display', 'none');
  $('.page:first').css('display', 'block');
  $('.tabs li:first').addClass('active');
  checkHash();
});
