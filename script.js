$(document).ready(function () {
  let currentYear = new Date().getFullYear();
  $("#spanYear").text(currentYear);

  //   function adjustNav() {
  //     if ($(window).width() > 700) {
  //       $(".nav-list").show();
  //     } else {
  //       $(".nav-list").hide();
  //     }
  //   }
  //   adjustNav();

  $("#mobile-menu").click(function () {
    $(".nav-list").toggle();
  });

  $("#mobile-menu").click(function colorSwitch() {
    if ($(".nav-list").is(":visible") && $(window).width() <= 800) {
      $(".bar").css("background-color", "#242424");
    } else {
      $(".bar").css("background-color", "aliceblue");
    }
  });

  $(window).on("wheel", function (event) {
    if (event.originalEvent.deltaY !== 0 && $(window).width() <= 800) {
      $(".nav-list").hide();
      $(".bar").css("background-color", "aliceblue");
    }
  });

  // 点击导航链接时隐藏导航列表
  $(".nav-list a").click(() => {
    if ($(".nav-list").is(":visible") && $(window).width() <= 800) {
      $(".nav-list").hide();
      $(".bar").css("background-color", "aliceblue");
    }
  });

  // 监听窗口尺寸变化
  $(window).resize(function () {
    if ($(window).width() > 800) {
      $(".nav-list").show();
      $(".nav-list").css("display", "flex");
    } else {
      $(".nav-list").hide();
    }
  });

  // 初始化 textReplace 功能
  textReplace();
});

let myArray = ["Full Stack Developer", "Passionate Learner", "Math Student"];
function textReplace() {
  let arrayIndex = 0;

  setInterval(function () {
    // 开始淡出
    $("#typingText").fadeOut(1000, function () {
      // 淡出后更换文本
      $("#typingText").text(myArray[arrayIndex]);
      // 更新索引
      arrayIndex = (arrayIndex + 1) % myArray.length;
      //   console.log(arrayIndex);
      // 开始淡入
      $("#typingText").fadeIn(1000);
    });
  }, 3000);
}
