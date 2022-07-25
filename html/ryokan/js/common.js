//モーダル
$(function () {
  $(".js-open").click(function () {
    $("#overlay, .modal-window").fadeIn();
    return false;
  });
  $(".js-close").click(function () {
    $("#overlay, .modal-window").fadeOut();
    return false;
  });
  $("#overlay").click(function () {
    $("#overlay, .modal-window").fadeOut();
    return false;
  });

  //カレンダー
  var sample = document.getElementById("days");
  var fp = flatpickr(days);

  var sample = document.getElementById("days");
  var fp = flatpickr(days, {
    dateFormat: "Y-n-j(l)",
  });
  var fp = flatpickr(days, {
    minDate: "today",
  });
  flatpickr("#days", {
    mode: "multiple",
    minDate: "today",
  });

//送信完了
  $(".submit-button").click(function () {
    $(".submit-click").fadeIn();
    $(".modal-dl").fadeOut();
    return false;
  });
});

// ヘッダー固定
function FixedAnime() {
  var headerH = $(".header").outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
}
$(window).scroll(function () {
  FixedAnime();
});
$(window).on("load", function () {
  FixedAnime();
});

// タブ
$(function () {
  $('.tab-item').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.show').removeClass('show');
    const index = $(this).index();
    $('.tab-content').eq(index).addClass('show');
  });
});

//スクロール
$(function () {
  $(".ef").css({ opacity: "0" });
  $(window).scroll(function () {
    $(".ef").each(function () {
      var ePos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight / 5) {
        $(this).animate({ opacity: 1 }, { duration: 800, easing: 'swing' })
      }
    });
  });
});