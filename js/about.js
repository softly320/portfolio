$(document).ready(function () {
    new WOW().init();
    
    function skill(id, per, color){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#ffcb05',
            trailColor: '#ebe8e8',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '15px'},
            from: {color: '#ffcb05'},
            to: {color: '#f04c23'},
            step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            }
        })
        bar.animate(per)
    }
    skill("#html", 0.7, "#f04c23");
    skill("#css",0.8, "#f04c23")
    skill("#scss", 0.7,"#f04c23")
    skill("#js",0.65, "#f04c23")
    skill("#ps",0.9, "#f04c23")
    skill("#ai",0.7, "#f04c23")

    const swiper = new Swiper(".about-work-content",{
        autoplay:{
            delay: 1000
        },
        loop:true,
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        // breakpoints:{
        //     480: {slidesPerView:1},
        //     768: {slidesPerView:2},
        //     1024: {slidesPerView:3},
        //     1400: {slidesPerView:4}
        //     // 반응형
        // },
        mousewheel:{
            invert: true
        }
    })


    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 80
    })









}); //jq