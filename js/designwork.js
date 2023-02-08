$(document).ready(function () {
    




    const work_img = [
        "images/dprocess-1.png",
        "images/dprocess-2.png",
        "images/dprocess-3.png",
        "images/dprocess-4.png",
        "images/process-1.png"
    ]
    const $modal_list = $(".web-content .web-list ul li")

    const bgc_color = [
        "#fff",
        "#fff",
        "transparent",
        "#2832c1",
        "#fff"
    ]

    const text_color = [
        "#3598c1",
        "#b5131a",
        "#b57e57",
        "#f5e80d",
        "#000"
    ]


    const $content = $(".web-content .content .content-list ul li")
    const $list = $(".web-content .web-list ul li")
    const $desc = $(".web-content .content .content-list ul li text-tab .desc,span,p")
    $content.eq(0).addClass("on")

    
    const length = $content.length;
    let idx = 0;

    $list.click(function(){
        let i = $(this).index();
        // console.log(idx)
        $list.removeClass("on").eq(i).addClass("on")
        $content.removeClass("on").eq(i+1).addClass("on")
        idx = i;
    })

    const $title_text = $(".web-content .content .content-list ul li .text-tab h3, .web-content .content .content-list ul li .text-tab .desc")
    const $footer_text = $(".web-list .footer")


    $modal_list.click(function(){
        let i = $(this).index()
        console.log(i)
        $(".window-content img").attr("src", work_img[i])
        $(".web-content .content .content-list").css("background-color", bgc_color[i])
        $title_text.css("color", text_color[i])
        $footer_text.css("color", text_color[i])
    })










    const $modal = $(".web-content .content .content-list ul li .btn-tab .modal")

    $modal.click(function(e){
        e.preventDefault();
        $(".window").fadeIn()
        $(".window-content").show()
    })
    $(".window-content i, .window").click(function(){
        $(".window").fadeOut();
        $(".window-content").scrollTop(0).hide()
    })

    let close = parseInt($(".window-content i").css("top"));
    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        $(".window-content i").css("top", close+pos+"px")
    })


});