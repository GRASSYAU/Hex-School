"use strict";

// //先綁第一個的nav跟內容
// $(".series-nav li").eq(0).addClass("li-hover");
// $(".all .a").eq(0).addClass("open");
// //綁定點擊事件跟著this索引值來增刪減css名稱
// $(".series-nav li").click(function (e) { 
//   e.preventDefault();
//   $(".all .a").removeClass("open");
//   var now = $(this).index();
//   $(".all .a").eq(now).addClass("open");
//   $(".series-nav li").removeClass("li-hover");
//   $(".series-nav li").eq(now).addClass("li-hover");
//   console.log(now)
// });
$("#btn-reply").click(function (e) {
  e.preventDefault();
  $(".abc").slideUp();
  $(".xxx").addClass("animate__animated animate__lightSpeedInRight").show();
});
$("#btn-Cancel").click(function (e) {
  e.preventDefault();
  $(".abc").slideDown();
  $(".xxx").addClass("animate__animated animate__lightSpeedInRight").hide();
}); // nav-active

$(".menu li").find("a").eq(2).addClass("nav-active");
$(".menu li").click(function (e) {
  var now = $(this).index();
  $(".menu li").find("a").removeClass("nav-active");
  $(".menu li").find("a").eq(now).addClass("nav-active");
  console.log(now);
});
//# sourceMappingURL=all.js.map
