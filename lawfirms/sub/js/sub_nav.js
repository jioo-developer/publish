$(document).ready(function () {
    var ww = $(window).width();
    var wh = $(window).height();

    $(window).scroll(function () {
        var sct = $(window).scrollTop();
            
            if (sct > wh * 0) {
                
                if($(window).width() > 1000){
                
                $("header").css({
                    backgroundColor: "#fff",
                    height: 74
                })
                    }
                $(".show,nav ul li a").css({
                    color: "#000"
                })

                $(".in_navs").hide();

                $("nav ul li").click(function () {
                    $("html, body").stop().animate({
                        scrollTop: 0
                    },500);
                })

                $("nav ul li").css({
                    width: 130
                })
                $(".in_navs li").css({
                    width: "100%"
                })

                $("nav").css({
                    paddingTop: 0
                })
            }
        if (sct > wh * 0.5){
            $(".logo").hide();
        }

            if (sct == wh * 0) {
                $("header").css({
                    backgroundColor: "transparent",
                    height: 175
                })
                
                $(".logo").show();
                
                $(".show,nav ul li a").css({
                    color: "#ded3c0"
                })
                $(".in_navs").show();

                $(".in_navs li a").css({
                    color: "#4b4b4b"
                })
                $("nav ul li").css({
                    width: "auto"
                })
                $(".in_navs li").css({
                    width: "100%"
                })
                $("nav").css({
                    paddingTop: 25
                })
            }
    })
})