"use strict";

// $(".series-nav li").eq(0).addClass("li-hover");
// $(".series-glasses").eq(0).addClass("open");
// $(".series-nav li").click(function (e) { 
//   e.preventDefault();
//   $(".series-glasses").removeClass("open");
//   var now = $(this).index();
//   $(".series-glasses").eq(now).addClass("open");
//   $(".series-nav li").removeClass("li-hover");
//   $(".series-nav li").eq(now).addClass("li-hover");
//   console.log(now)
// });
$(".series-nav li").eq(0).addClass("li-hover");
$(".all .a").eq(0).addClass("open");
$(".series-nav li").click(function (e) {
  e.preventDefault();
  $(".all .a").removeClass("open");
  var now = $(this).index();
  $(".all .a").eq(now).addClass("open");
  $(".series-nav li").removeClass("li-hover");
  $(".series-nav li").eq(now).addClass("li-hover");
  console.log(now);
});
//# sourceMappingURL=all.js.map
