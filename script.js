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

  // 汉堡菜单颜色变化
  $("#mobile-menu").click(function colorSwitch() {
    if ($(".nav-list").is(":visible") && $(window).width() <= 800) {
      $(".bar").css("background-color", "#242424");
    } else {
      $(".bar").css("background-color", "aliceblue");
    }
  });

  // 鼠标滚轮时间监听
//   $(window).on("wheel", function (event) {
//     if (event.originalEvent.deltaY !== 0 && $(window).width() <= 800) {
//       barColorWhite();
//     }
//   });

  // 手机滚动事件监听
  $(window).scroll(function (event) {
    if (event.originalEvent.deltaY !== 0 && $(window).width() <= 800) {
      barColorWhite();
    }
  });

  // 点击导航链接时隐藏导航列表
  $(".nav-list a").click(() => {
    if ($(".nav-list").is(":visible") && $(window).width() <= 800) {
      barColorWhite();
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

function barColorWhite() {
  $(".nav-list").hide();
  $(".bar").css("background-color", "aliceblue");
}

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
