$(document).ready(function () {
    new WOW({
        animateClass: "animate__animated"
    }).init()

    $("html, body").contextmenu(function(e){
        e.preventDefault();
        let x = e.pageX;
        let y = e.pageY;
        console.log("가로:"+x, "세로:"+y)
        $(".menu").css({
            left: x+"px",
            top: y+"px"
        }).show()


        $(".menu, html, body").click(function (e) { 
            $(".menu").hide()
        });
    })


    
    const $fullmenu = $(".fullmenu .full-wrap .left ul li")
    $fullmenu.mouseover(function(){
        let i = $(this).index()
        $fullmenu.removeClass("on").eq(i).addClass("on")
    }).mouseout(function(){
        let i = $(this).index()
        $fullmenu.eq(i).removeClass("on")
    })

    $(window).scroll(function () {
        let pos = $(window).scrollTop()
        console.log(pos)
        if(pos >= 5){
            $(".header").addClass("on");
        }else{
            $(".header").removeClass("on");
        }
    })

    const $nav = $(".header .header-wrap .nav")
    $nav.click(function(){
        $(".fullmenu").toggleClass("on")
        $nav.toggleClass("on")
        setCSS();
    })





    function setCSS() {
        if ($nav.hasClass("on")){
            $("html, body").css("overflow", "hidden");
            $(".header").css("background-color", "transparent")
        }else{
            $("html, body").css("overflow", "");
            $(".header").css("background-color", "")
        }
    }



});