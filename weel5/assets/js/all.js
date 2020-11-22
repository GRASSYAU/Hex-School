"use strict";

$("#btn-reply").click(function (e) {
  e.preventDefault();
  $(".abc").slideUp();
  $(".xxx").addClass("animate__animated animate__lightSpeedInRight").show();
});
$("#btn-Cancel").click(function (e) {
  e.preventDefault();
  $(".abc").slideDown();
  $(".xxx").addClass("animate__animated animate__lightSpeedInRight").hide();
}); // // $(".menu li").find("a").eq(2).addClass("nav-active")
// $(".menu li").click(function (e) {
//   var now = $(this).index();
//   $(".menu li").find("a").removeClass("nav-active")
//   $(".menu li").find("a").eq(now).addClass("nav-active");
//   console.log(now)
// })

var url = window.location.pathname;
$('.menu li a').each(function () {
  $(this).toggleClass('nav-active', $(this).attr('href') == url.split('/')[1]);
});
$("#qwe").click(function () {
  $(".toggle-admin").stop(true, false).slideToggle();
});
//# sourceMappingURL=all.js.map
