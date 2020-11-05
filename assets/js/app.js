
gsap.registerPlugin(ScrollTrigger)


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
function callback(event){
    startAnimation();
}
$(function(){

    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
            var tlMenu = gsap.timeline()
            sidebarRight = $('#navMain .sidebar-right')
            navMain = $('#navMain');
            tlMenu
                .set(sidebarRight, {opacity: 0} )
                .set(navMain, {width: "61px"} );
        }, 
        "(max-width: 992px)": function() {
            var tlMenu = gsap.timeline()
            sidebarRight = $('#navMain .sidebar-right')
            navMain = $('#navMain');
            tlMenu
                .set(sidebarRight, {opacity: 0} )
                .set(navMain, {width: "100vw"} );
        }
    
    })

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
    $(".clickMenuMainMobile").click(function(){
        var sidebarBox = $('#navMainMobile .sidebarBox'),
            sidebarRight = $("#navMainMobile .sidebar-right"),
            timeNav = .5,
            open = $(this).data("name"),
            tlMenu = gsap.timeline();
        console.log(open)
        if (open == "open"){
            sidebarRight.addClass("open");
            $(this).data("name","close");
        }else{
            $(this).data("name","open");
            sidebarRight.removeClass("open");
        }
    });
    
    $( "#navMain" ).hover(
        function() {
            var tlMenu = gsap.timeline()
            dataMenu = $(this).data('menu')
            sidebarRight = $('#navMain .sidebar-right')
            btnMenuNav = $('#navMain .btn-menuNav')
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
            sidebarRight = $('#navMain .sidebar-right')
            btnMenuNav = $('#navMain .btn-menuNav')
            timeNav = .5
            navMain = $('#navMain');
            tlMenu
                .to(sidebarRight,{duration: timeNav, opacity: 0,ease:Power3.easeInOut})
                .to(navMain, {duration: timeNav, width: "61px",ease:Power3.easeInOut})
                .to(btnMenuNav, {duration: timeNav, opacity: 1,ease:Power3.easeInOut});
        }
    );
});




// $(window).resize(function() {
//     if (activeDevice != _Device)
//         location.reload();
//     else
        
// });