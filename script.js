$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".js-header").addClass("transform");
    } else {
      $(".js-header").removeClass("transform");
    }
  });
});

$('.p-swiper-slide img:nth-child(n+2)').hide();
setInterval(function() {
  $(".p-swiper-slide img:first-child").fadeOut(1000);
  $(".p-swiper-slide img:nth-child(2)").fadeIn(1000);
  $(".p-swiper-slide img:first-child").appendTo(".p-swiper-slide");
}, 3000);

window.onload = function () {
  let nav = document.getElementById('nav-wrapper');
  let btn = document.getElementById('js-btn');
  let blackBg = document.getElementById('js-black-bg');

  btn.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};
