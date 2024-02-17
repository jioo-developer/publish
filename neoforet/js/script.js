$(document).ready(function () {

    var winScrollTop;
    var sectionMainTop;
    var sectionMainBottom;

    // 스와이프  -------------------------------//
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    // ---------------------------------------//

    var swiper = new Swiper(".product-Swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 스와이프 end ---------------------------------------//

    setTimeout(function () {
        $(".wrap").addClass("loaded")
    }, 400)
    
    $(".in_cover > .button_box > button").click(function(){
        $(".cover").hide();
    })

    //loaded 애니메이션

    //스크롤 제어

    function setProperty() {
        winScrollTop = $(window).scrollTop();
        sectionMainTop = $(".main_section").offset().top
        sectionMainBottom = sectionMainTop + $(".main_section").height();
    }

    function Add() {
        $("header").addClass("white")
        $(".main_li > a").addClass("gray")
        $(".utily_btn").addClass("c3")
        $(".utily_btn > span").addClass("scroll")
    }

    function Remove() {
        $("header").removeClass("white")
        $(".main_li > a").removeClass("gray")
        $(".utily_btn").removeClass("c3")
        $(".utily_btn > span").removeClass("scroll")
    }

    function scrollCheck() {
        setProperty()
        if (winScrollTop >= sectionMainBottom / 1.1) {
            Add()
            $(".logo_img").addClass("color-logo")
        } else {
            Remove()
            $(".logo_img").removeClass("color-logo")
        }
    }

    $(window).scroll(function (e) {
        setProperty();
        if (winScrollTop >= sectionMainBottom / 1.1) {
            Add()
            $(".logo_img").addClass("color-logo")
        } else {
            Remove()
            $(".logo_img").removeClass("color-logo")
        }
    })

    function init() {
        scrollCheck()
    }

    init();

    //스크롤 제어 end 

    //스크립트 end
})
