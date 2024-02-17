$(document).ready(function(){

$(".m_btn").click(function(){
        $(".m_navi").animate({
            right:0
        })
    })
    
    $(".close").click(function(){
        $(".m_navi").animate({
            right:"-100%"
        })
    })    
    
})
