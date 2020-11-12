"use strict";

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
