$(document).ready(function () {
    var ww = $(window).width();
    var wh = $(window).height();

    if (ww > 800 && $(".section").height() > 800){

        $('#fullpage').fullpage({
            licenseKey: "A06F1A52-A68548B4-A38840D3-C9DD6D9F",
            scrollBar: true,
            afterLoad: function (origin, destination, direction) {
                var loadedSection = this;
                if (destination.index == 2) {
                    $("nav").css({
                        opacity: 0
                    })
                }
                if (destination.index == 3) {
                    $("nav").css({
                        opacity: 0
                    })
                }
            },
            onLeave: function (origin, destination, direction) {
                var leavingSection = this;
                if (destination.index !== 3 && destination.index !== 2) {
                    $("nav").delay(1000).animate({
                        opacity:1
                    },1000)
                }
            }
        });
    } else {

    }

});
