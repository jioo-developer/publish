$(document).ready(function () {
    var ww = $(window).width();
    if (ww > 1380) {
        $(".gall_row li").removeClass("col-gn-3")
        $(".gall_row li").addClass("col-gn-4")
    }
    if (ww < 1380) {
        $(".gall_row li").removeClass("col-gn-4")
        $(".gall_row li").addClass("col-gn-3")
    }

    if (ww < 1050) {
        $(".gall_row li").removeClass("col-gn-3")
        $(".gall_row li").addClass("col-gn-2")
    }
    if (ww < 600) {
        $(".gall_row li").removeClass("col-gn-2")
        $(".gall_row li").addClass("col-gn-1")
    }
})
