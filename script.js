$(document).ready(function () {
  let currentYear = new Date().getFullYear();
  $("#spanYear").text(currentYear);

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

  // 手机滚动事件监听
  $(window).scroll(function (event) {
    if (event.originalEvent.deltaY !== 0 && $(window).width() <= 800 && $(".nav-list").is(":visible")) {
      console.log('scroll1');
      barColorWhite();
    }
  });

  // 点击导航链接时隐藏导航列表
  $(".nav-list a").click(() => {
    if ($(".nav-list").is(":visible") && $(window).width() <= 800) {
      barColorWhite();
    }
  });

  // 监听全页面的点击事件
  $(document).on("click", function (event) {
    // 检查点击是否发生在 nav 或其内部，以及 mobile-menu 上
    if (!$(event.target).closest("nav, #mobile-menu").length) {
      barColorWhite(); // 如果点击的不是 nav 或 mobile-menu，则关闭菜单
    }
  });

  // 如果你还需要绑定点击 nav 但不关闭菜单的事件，可以添加此代码
  $("nav").on("click", function (event) {
    event.stopPropagation(); // 阻止 nav 内的点击事件冒泡到 document
  });

  // 监听窗口尺寸变化
  $(window).resize(function () {
    if ($(window).width() > 800) {
      $(".nav-list").show();
      $(".nav-list").css("display", "flex");
      // console.log($(".nav-list").is(":visible"));
    } else {
      $(".nav-list").hide();
      // console.log($(".nav-list").is(":visible"));
    }
  });

  // 初始化 textReplace 功能
  textReplace();
  let debouncedToggleMenuColor = debounce(toggleMenuColor, 250);
  $(window).resize(debouncedToggleMenuColor);
});

function debounce(func, delay) {
  let timeout; // 用于存储setTimeout返回的ID

  // 返回一个新函数，这个新函数会延迟执行传入的func
  return function() {
    const context = this; // 保留调用上下文
    const args = arguments; // 保留传递给函数的参数

    // 清除之前的延时器
    clearTimeout(timeout);

    // 设置新的延时器
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

function toggleMenuColor() {
  if (!$(".nav-list").is(":visible") && $(window).width() <= 800)
    // console.log(!$(".nav-list").is(":visible"));
    $(".bar").css("background-color", "aliceblue");
}

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
