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
    if (
      event.originalEvent.deltaY !== 0 &&
      $(window).width() <= 800 &&
      $(".nav-list").is(":visible")
    ) {
      console.log("scroll1");
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
    if (!$(event.target).closest("nav, #mobile-menu").length) {
      barColorWhite();
    }
  });

  $("nav").on("click", function (event) {
    event.stopPropagation();
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
  let debouncedToggleMenuColor = debounce(toggleMenuColor, 250);
  $(window).resize(debouncedToggleMenuColor);
});

function debounce(func, delay) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

function toggleMenuColor() {
  if (!$(".nav-list").is(":visible") && $(window).width() <= 800)
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
    $("#typingText").fadeOut(1000, function () {
      $("#typingText").text(myArray[arrayIndex]);

      arrayIndex = (arrayIndex + 1) % myArray.length;

      $("#typingText").fadeIn(1000);
    });
  }, 3000);
}
