//視差
AOS.init({
  duration: 1500,
  delay: 100,
  offset: 120,
});

//i-con 扭動
$(".i-con li").on({
  mouseover: function () {
    $(this).addClass("animate__animated animate__jello");
  },
  animationend: function () {
    $(this).removeClass("animate__animated animate__jello");
  },
});

$(".item ").on({
  mouseover: function () {
    $(this).find("p").addClass("animate__animated animate__bounceIn");
  },
  animationend: function () {
    $(this).find("p").removeClass("animate__animated animate__bounceIn");
  },
});

lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true,
  albumLabel:"第%1張，共%8張"
});