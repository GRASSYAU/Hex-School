//下拉式選單
$("nav>.menu>li").hover(
  function () {
    $(this).find("ul").stop(true, true).slideDown(300);
  },
  function () {
    $(this).find("ul").stop(true, true).slideUp(300);
  }
);

//Swiper
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//LIGHTBOX
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    albumLabel:"第%1張，共%2張"
})

  //top
  $(".top").click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("animate__animated animate__bounceIn")
      $("html,body").animate({"scrollTop":"0"},900)
  });