gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.saveStyles(".scrollHorizontal");

let scrollTl = '';

let container = document.getElementById("scrollHorizontal");

function animacionVertical(){
    
    // Animacion para el home 01

    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home01 .trigger1',
            start: 'top center',
            end: 'bottom center-=10%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })
    
}
function animacionHorizontal(){

    

    scrollTl = gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.offsetWidth
        }
    });


    // Animaciones para la seccion del Home

    // gsap.set('#section-home01', {scrollTrigger: {
    //     trigger: '#section-home01 .header-content',
    //     start: 'bottom bottom-=20%',
    //     end: 'top center',
    //     scrub: true,
    //     toggleClass: 'active',
    //     markers: true,
    // }})


    // Animacion para el home 01

    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home01 .trigger1',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })

    parallaxTl
        .from('#section-home01 .header-content', {duration: 1.5, x: '-30%'})
        // .from('#section-home01 .body-content', {duration: 0.5, opacity: 0, y: '-10%',stagger: .8});

    

    // Animacion para el home 02
    
    const parallaxTl2 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home02 .trigger1',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })

    parallaxTl2
        .from('#section-home02 .header-content', {duration: 1.5, x: '-30%'})
        // .from('#section-home02 .body-content', {duration: 0.5, opacity: 0, y: '-10%',stagger: .8});
    
    const parallaxTl3 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home02 .trigger2',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })
    
    parallaxTl3
        .from('#section-home02 .box-tipos-serv .box-icon-service', {duration: 0.5, opacity: 0, scale: 0,stagger: .8});
    

    const parallaxTl4 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home02 .trigger3',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })
    
    parallaxTl4
        .from('#section-home02 .box-gancho', {duration: 1, ease: Back.easeOut.config(1.7), y: '-100%'});


    // Animacion para el home 03

    const parallaxTl5 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home03 .trigger1',
            start: 'top top+=40%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        },
    })

    parallaxTl5
        .from('#section-home03 .header-content', {duration: 1.5, x: '-15%'})
        .from('#section-home03 .body-content .box-logos', {duration: 0.5, opacity: 0, ease: Back.easeOut.config(1.7), scale: 0,stagger: .8})
        // .to(['.noscroll-full', '.scroll-full'], {duration: 0, css: {overflow: 'hidden'} })

    // Fin de las animaciones del home
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


$(function(){

    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
            animacionHorizontal();
            console.log('desk');
            var tlMenu = gsap.timeline()
            sidebarRight = $('.sidebar-right')
            navMain = $('#navMain');
            tlMenu
                .set(sidebarRight, {opacity: 0} )
                .set(navMain, {width: "61px"} );
        }, 
        "(max-width: 992px)": function() {
            animacionVertical();
            console.log('movil');
            var tlMenu = gsap.timeline()
            sidebarRight = $('.sidebar-right')
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


})