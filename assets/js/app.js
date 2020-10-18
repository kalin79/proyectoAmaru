var controller;

function animationHorizontal(){


    // console.log(controller)
    if (controller != undefined ){
        controller = controller.destroy(true);
    }

    
    controller = new ScrollMagic.Controller({
        vertical: false,
        globalSceneOptions: {
            triggerHook: 0.15,
        }
    });

    console.log(controller)

    // build scene

}



function callback(event){
    startAnimation();
}

function startAnimation(){
    var tlSlider = gsap.timeline({duration: 1})
        SliderLogo = $('.Slider-logo')
        SliderTitle = $('.Slider-title')
        SliderDescription = $('.Slider-description')
        SliderButtom = $('.Slider-buttom')
        timeSlide = .45; 
    
    tlSlider
        // .set([SliderLogo, SliderTitle, SliderDescription,SliderButtom], {opacity: 0})
        .from(SliderLogo, {duration: timeSlide, opacity: 0,y: "-30%",ease:Power4.easeInOut})
        .from(SliderTitle, {duration: timeSlide, opacity: 0,x: "10%",ease:Power4.easeInOut})
        .from(SliderDescription, {duration: timeSlide, opacity: 0,y: "10%",ease:Power4.easeInOut})
        .from(SliderButtom, {duration: timeSlide, opacity: 0, x: "-5%", ease:Power1.easeIn})
}
$(document).ready(function(){
    var main = document.querySelector("scrollHorizontal");

    window.addEventListener("wheel", e => {
        e.preventDefault();
        main.scrollLeft += e.deltaY > 0 ? 100 : -100
    }, { passive: false });
    // Orientación de navegacion
    animationHorizontal()
    // Inicializacion de la barra de menu principal

    var tlMenu = gsap.timeline()
        sidebarRight = $('.sidebar-right')
        navMain = $('#navMain');
    tlMenu
        .set(sidebarRight, {opacity: 0} )
        .set(navMain, {width: "61px"} );


    // Animacion del Slider

    startAnimation();

    $('.owl-sliderHome').owlCarousel({
        animateOut: 'fadeOut',
        loop:false,
        margin:0,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        onTranslate: callback,
        responsive:{
            0:{
                items:1
            }
        }
    })

    

    // Eventos

    $( "#navMain" ).hover(
        function() {
            var tlMenu = gsap.timeline()
            dataMenu = $(this).data('menu')
            sidebarRight = $('.sidebar-right')
            btnMenuNav = $('.btn-menuNav')
            timeNav = .5
            navMain = $('#navMain');
            tlMenu
                .to(btnMenuNav, {duration: timeNav, opacity: 0,ease:Power3.easeInOut})
                .to(navMain, {duration: timeNav, width: "294px",ease:Power3.easeInOut})
                .to(sidebarRight,{duration: timeNav, opacity: 1,ease:Power3.easeInOut});
        }, 
        function() {
            var tlMenu = gsap.timeline()
            dataMenu = $(this).data('menu')
            sidebarRight = $('.sidebar-right')
            btnMenuNav = $('.btn-menuNav')
            timeNav = .5
            navMain = $('#navMain');
            tlMenu
                .to(sidebarRight,{duration: timeNav, opacity: 0,ease:Power3.easeInOut})
                .to(navMain, {duration: timeNav, width: "61px",ease:Power3.easeInOut})
                .to(btnMenuNav, {duration: timeNav, opacity: 1,ease:Power3.easeInOut});
        }
    );


    // $('.clickMenuMain').click(function(){
    //     var tlMenu = gsap.timeline()
    //         dataMenu = $(this).data('menu')
    //         sidebarRight = $('.sidebar-right')
    //         btnMenuNav = $('.btn-menuNav')
    //         timeNav = .5
    //         navMain = $('#navMain');
    //     if (dataMenu === 'open'){
    //         tlMenu
    //             .to(btnMenuNav, {duration: timeNav, opacity: 0,ease:Power3.easeInOut})
    //             .to(navMain, {duration: timeNav, width: "294px",ease:Power3.easeInOut})
    //             .to(sidebarRight,{duration: timeNav, opacity: 1,ease:Power3.easeInOut});
    //             $(this).data('menu', 'close')
    //     }else{
    //         tlMenu
    //             .to(sidebarRight,{duration: timeNav, opacity: 0,ease:Power3.easeInOut})
    //             .to(navMain, {duration: timeNav, width: "61px",ease:Power3.easeInOut})
    //             .to(btnMenuNav, {duration: timeNav, opacity: 1,ease:Power3.easeInOut});

    //         $(this).data('menu', 'open')
    //     }
    // });
})