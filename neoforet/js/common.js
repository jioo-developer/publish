$(document).ready(function () {

    $("header").mouseenter(function () {
        $(".wrap").addClass("action")
    })

    $("header").mouseleave(function () {
        $(".wrap").removeClass("action")

        $(".sub_menu").css({
            display: "none"
        })

        $(".sns_wrap").css({
            visibility: "hidden"
        })
        $(".main_li a").removeClass("green")

        //마우스가 header을 떠났을 때 안지워진 요소가 있다면 다 지우기
    })

    // nav 메뉴 제어

    $(".sub_menu").each(function (index) {
        $(this).attr("data-index", index)
    })

    $(".main_li > a").each(function (index) {
        $(this).attr("data-index", index)
    })

    $(".main_li").each(function (index) {
        $(this).attr("data-index", index)
    }).hover(function () {
        var i = $(this).attr("data-index");

        $(".main_li > a[data-index=" + i + "]").addClass("green")
        $(".main_li > a[data-index!=" + i + "]").removeClass("green")

        // 일치하는 a에 색 넣기

        $(".main_li > a[data-index=" + i + "] > span").toggleClass("hover")
        $(".main_li > a[data-index!=" + i + "] > span").removeClass("hover")

        // 일치 안하는 a에 색 제거

        //제품영역만 높이 다르게 주기
        if (i == 1) {
            $(".sub_menu[data-index=" + i + "]").css({
                display: "block",
                height: 210
            })
        } else {
            $(".sub_menu[data-index=" + i + "]").css({
                display: "block"
            })
        }
        // 제품영역만 높이 다르게 주기 end

        $(".sub_menu[data-index!=" + i + "]").css({
            display: "none"
        })
    })

    $(".nav").mouseleave(function () {
        $(".main_li > a").removeClass("green")
    })

    // 마우스가 ul 밖으로 나갔을 때 혹시 안닫힌 게 있나 확인

    // nav 메뉴 제어 end

    // sns / lang 눌렀을 때 ul 뜨게 하는거 제어

    $(".sns_wrap").each(function (index) {
        $(this).attr("data-index", index)
    })

    $(".utily_btn").each(function (index) {
        $(this).attr("data-index", index);
    }).hover(function () {
        var i2 = $(this).attr("data-index");
        $(".sns_wrap[data-index=" + i2 + "]").css({
            visibility: "visible"
        })
        $(".sns_wrap[data-index!=" + i2 + "]").css({
            visibility: "hidden"
        })
    })

    $(".utility").mouseleave(function () {
        $(".sns_wrap").css({
            visibility: "hidden"
        })
    })

    // sns / lang 눌렀을 때 ul 뜨게 하는거 제어 end
    $(".sns").mouseenter(function () {
        $(this).find("span").addClass("green hover")
    })

    $(".sns").mouseleave(function () {
        $(this).find("span").removeClass("green hover")
    })

    $(".lang").mouseenter(function () {
        $(this).find("span").addClass("green hover")
    })

    $(".lang").mouseleave(function () {
        $(this).find("span").removeClass("green hover")
    })

    var iconLength = document.querySelectorAll(".icons");
    Array.prototype.forEach.call(iconLength, function (val, index) {
        var defaultVaule = 50
        if (index < iconLength.length) {
            iconLength[index].style.backgroundPosition = "-" + defaultVaule * index + "px " + 0
        }
    })

    document.querySelector(".top_btn").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

})
