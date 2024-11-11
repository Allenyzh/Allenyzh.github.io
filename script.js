$(document).ready(function () {
  let currentYear = new Date().getFullYear();
  $("#spanYear").text(currentYear);

  // 确保根据屏幕宽度设置导航状态
  function adjustNav() {
    if ($(window).width() > 700) {
      $(".nav-list").show();
    } else {
      $(".nav-list").hide();
    }
  }

  // 调用函数以设置初始状态
  adjustNav();

  // 切换汉堡菜单
  $("#mobile-menu").click(function () {
    $(".nav-list").toggle();
  });

  // 点击导航链接时隐藏导航列表
  $(".nav-list a").click(function () {
    if ($(".nav-list").is(":visible") && $(window).width() <= 700) {
      $(".nav-list").hide();
    }
  });

  // 监听窗口尺寸变化
  $(window).resize(function () {
    if ($(window).width() > 700) {
      $(".nav-list").show();
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
  const typingElement = $("#typingText"); // 使用 jQuery 选择器

  setInterval(function () {
    // 开始淡出
    typingElement.fadeOut(1000, function () {
      // 淡出后更换文本
      typingElement.text(myArray[arrayIndex]);
      // 更新索引
      arrayIndex = (arrayIndex + 1) % myArray.length;
      //   console.log(arrayIndex);
      // 开始淡入
      typingElement.fadeIn(1000);
    });
  }, 3000);
}
