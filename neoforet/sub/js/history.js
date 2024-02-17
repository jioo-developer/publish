$(document).ready(function () {
    var array = ["· 6월 네오포레 FLEX(화장품 파우치 합지용) 화장품 튜브 개발 완료",

"· 1월 네오포레 STRAW(U자, 망원경형) 개발 완료",

"· 11월 네오포레 완충재 출시<br/>\
· 11월 네오포레 CUP 재활용성 인증(PTS) 획득",

"· 10월 네오포레 STRAW 재활용성 인증(PTS) 획득",

"· 7월 네오포레 CUP 재활용성 인증(UL) 획득",

"· 6월 네오포레 STRAW 생분해성 인증(OK Compost) 획득",

"· 5월 네오포레 CUP 식품안전성 인증(BfR,FDA) 획득",

"· 4월 네오포레 브랜드 정식 런칭(네오포레 STRAW, 네오포레 CUP)",

"· 3월 네오포레 CUP 생분해성 인증(OK Compost) 획득",

"· 1월 네오포레 CUP 개발 완료",

"· 10월 네오포레 STRAW(일자형) 개발 완료"]
    Array.prototype.forEach.call(array, function (val, index) {
        var div = document.createElement("div")
        div.classList.add("con_img")
        var figure = document.createElement("figure")
        figure.style.backgroundImage = `url('http://rlawlgh3687.dothome.co.kr/neoforet/sub/img/list${index}.jpg')`
        var fig = document.createElement("pre")
        fig.innerHTML = array[index]
        div.appendChild(figure)
        div.appendChild(fig)
        $(".con_img_wrap").append(div)
    })

    var winSrollTop;

    $(window).scroll(function () {
        winSrollTop = $(window).scrollTop();
        if (winSrollTop >= 300) {
            $(".year_wrap").addClass("fixed")
            $(".history-navigation li").removeClass("active")
            $(".history-navigation li:nth-child(2)").addClass("active")
            document.querySelector(".year").innerHTML = "2021"
        } else {
            $(".year_wrap").removeClass("fixed")
        }

        if (winSrollTop >= 420) {
            $(".history-navigation").addClass("fixed2")
        } else {
            $(".history-navigation").removeClass("fixed2")
        }

        if (winSrollTop >= 1400) {
            document.querySelector(".year").innerHTML = "2020"
            $(".history-navigation li").removeClass("active")
            $(".history-navigation li:nth-child(3)").addClass("active")
        }

        if (winSrollTop >= 6400) {
            document.querySelector(".year").innerHTML = "2018"
            $(".history-navigation li").removeClass("active")
            $(".history-navigation li:nth-child(4)").addClass("active")
        }

        if (winSrollTop >= 6500) {

        }
    })
})
