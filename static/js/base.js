$(function () {
  $('[data-href]').click(function () {
    $('html,body').animate({ scrollTop: $($(this).data('href')).offset().top });
    return false;
  });
});