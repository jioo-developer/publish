$(document).ready(function () {

    var ww = $(window).width();

    if (ww > 960) {

        setTimeout(function () {
            $("#counter1").jQuerySimpleCounter({
                start: 0,
                end: 3688,
                easing: "swing",
                duration: 3300,
                complete: ""
            });
            $("#counter2").jQuerySimpleCounter({
                start: 0,
                end: 1578,
                easing: "swing",
                duration: 3300,
                complete: ""
            });
            $("#counter3").jQuerySimpleCounter({
                start: 0,
                end: 4,
                easing: "swing",
                duration: 2300,
                complete: ""
            });
            $("#counter4").jQuerySimpleCounter({
                start: 0,
                end: 4,
                easing: "swing",
                duration: 2300,
                complete: ""
            });
        })
    } else {

    }

    var swiper = new Swiper('.m_swiper5', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    var swiper = new Swiper('.m_swiper2', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 2
            },
            800: {
                slidesPerView: 1
            }
        }
    });

    if (ww < 412) {
        $(".s3_caps").text("가압류")
    }


})
