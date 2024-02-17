$(document).ready(function () {
    var winscrollTop;
    var once = 0;
    $(window).scroll(function () {
        winscrollTop = $(window).scrollTop();
        if (winscrollTop >= 1700) {
            if (once == 0) {
                var promise = new Promise(function (resolve, reject) {
                    once = 1
                    resolve()
                })
                promise.then(() => {
                    $(".graph_bar1,.graph_bar3").animate({
                        width: 730
                    }, 700)
                    $(".graph_bar2,.graph_bar4").animate({
                        width: 640
                    }, 700)

                    function count() {
                        $("#graph_bar1").jQuerySimpleCounter({
                            start: 0,
                            end: 848,
                            easing: "swing",
                            duration: 700,
                            complete: ""
                        });
                        $("#graph_bar2").jQuerySimpleCounter({
                            start: 0,
                            end: 734,
                            easing: "swing",
                            duration: 700,
                            complete: ""
                        });
                        $("#graph_bar3").jQuerySimpleCounter({
                            start: 0,
                            end: 951,
                            easing: "swing",
                            duration: 700,
                            complete: ""
                        });
                        $("#graph_bar4").jQuerySimpleCounter({
                            start: 0,
                            end: 856,
                            easing: "swing",
                            duration: 700,
                            complete: ""
                        });
                    }

                    count();
                })
            }
        }
    })
})
