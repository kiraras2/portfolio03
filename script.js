$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".js-header").addClass("transform");
    } else {
      $(".js-header").removeClass("transform");
    }
  });
});

window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var btn = document.getElementById('js-btn');
  var blackBg = document.getElementById('js-black-bg');

  btn.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};
