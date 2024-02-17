$(document).ready(function () {
  let array = [1, 2, 3, 4];
  var profile = $(".section05");
  var winScrollTop;

  function moveSection() {
    winScrollTop = $(window).scrollTop();

    if (winScrollTop >= 100) {
      $(".work_way:nth-child(1)").animate(
        {
          top: 0,
          opacity: 1,
        },
        900
      );
    }
    if (winScrollTop >= 200) {
      $(".work_way:nth-child(2)").animate(
        {
          top: 0,
          opacity: 1,
        },
        900
      );
    }

    if (winScrollTop >= 400) {
      $(".work_way:nth-child(3)").animate(
        {
          top: 0,
          opacity: 1,
        },
        900
      );
    }
    if (winScrollTop >= 1000) {
      $(".history_list").animate(
        {
          top: 0,
          opacity: 1,
        },
        500
      );
    }
  }

  $(window).scroll(function () {
    moveSection();
  });

  moveSection();

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 80,
    grabCursor: true,
    speed: 1500,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  array.map(function (val, index) {
    $(".history_list li:nth-child(" + val + ")").mouseenter(function () {
      $(".carrer").css({
        opacity: 0,
      });
      $(".carrer" + val).css({
        opacity: 1,
      });
    });
  });
  $(".history_list li").mouseleave(function () {
    $(".carrer").css({
      opacity: 0,
    });
  });

  $(".work a").click(function () {
    if ($(this.hash).offset()) {
      let scrollY = $(this.hash).offset().top - 1000;
      $("html,body").animate(
        {
          scrollTop: scrollY,
        },
        700
      );
    }
  });

  $(".more").click(function () {
    $(this).css({
      display: "none",
    });
    $(this.nextElementSibling).css({
      display: "flex",
    });
  });

  let PortArray = document.querySelectorAll(".port_txt_wrap");
  let more = document.querySelectorAll(".more");
  Array.prototype.forEach.call(more, function (val, index) {
    more[index].addEventListener("click", function () {
      PortArray[index].style.display = "flex";
    });
  });

  $(".close").click(function () {
    $(".chatting").hide();
    $(".chat_wrap").css({
      display: "flex",
    });
    $(".live_wrap,.select").css({
      opacity: 0,
    });
  });

  $(".chat_wrap").click(function () {
    $(this).fadeOut();
    $(".chatting").show();
    $(".live_wrap1").delay(200).animate(
      {
        opacity: 1,
      },
      700
    );
    $(".live_wrap2").delay(1000).animate(
      {
        opacity: 1,
      },
      700
    );
    $(".select").delay(1700).animate({
      opacity: 1,
    });
  });

  $(".select li").click(function (e) {
    $(".select_live").css({
      display: "flex",
      opacity: 1,
    });
    if (e.target.dataset.id == 1) {
      $(".select_chat").text("저는 26살입니다");
    } else if (e.target.dataset.id == 2) {
      $(".select_chat").text("동주대학교 시각디자인과를 졸업했습니다 !");
    } else if (e.target.dataset.id == 3) {
      $(".select_chat").text(
        " 저는 1번의 에이전시 경험과 2번의 프리랜서 경험을 가지고있으며 부산,서울위주로 활동합니다.\n\n사용하는 기술로는 html, css, scss, js, jquery, php, gnuboard를 주력으로 사용하고 있습니다"
      );
      $(".select_chat").html($(".select_chat").html().replace(/\n/g, "<br/>"));
    } else {
      $(".select_chat").text("문의는 rlawlgh388@naver.com 입니다");
    }
  });
});
