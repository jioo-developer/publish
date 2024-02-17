$(document).ready(function () {
    $(".logo_img").addClass("color-logo")
    $("header").addClass("white")
    $(".main_li > a").addClass("gray")
    $(".utily_btn").addClass("c3")
    $(".utily_btn > span").addClass("scroll")

    function pageIndex() {
        if ($("#wrap").hasClass("about_wrap")) {
            $(".page-menu li:nth-child(1)").addClass("index-page")
            $(".page-menu li:nth-child(1) a").addClass("index-page")
        }

        if ($("#wrap").hasClass("friend_wrap")) {
            $(".page-menu li:nth-child(2)").addClass("index-page")
            $(".page-menu li:nth-child(2) a").addClass("index-page")
        }

        if ($("#wrap").hasClass("history_wrap")) {
            $(".page-menu li:nth-child(3)").addClass("index-page")
            $(".page-menu li:nth-child(3) a").addClass("index-page")
        }

        if ($("#wrap").hasClass("identity_wrap")) {
            $(".page-menu li:nth-child(4)").addClass("index-page")
            $(".page-menu li:nth-child(4) a").addClass("index-page")
        }
    }
    pageIndex()
})
