gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.saveStyles(".scrollHorizontal");

let scrollTl = '',
    parallaxTl = '',
    parallaxTl2 = '',
    parallaxTl3 = '',
    parallaxTl4 = '',
    parallaxTl5 = '';
let container = document.getElementById("scrollHorizontal");

function resetGsap(){
    if (parallaxTl != ''){
        parallaxTl.restart();
        parallaxTl.kill();
        console.log(parallaxTl)
        console.log(1)
    }
    if (parallaxTl2 != ''){
        parallaxTl2.kill();
    }
    if (parallaxTl3 != ''){
        parallaxTl3.kill();
    }
    if (parallaxTl4 != ''){
        parallaxTl4.kill();
    }
    if (parallaxTl5 != ''){
        parallaxTl5.kill();
    }
}

function animacionVertical(){
    
    // reseteamos
    // resetGsap();
    // if (scrollTl != ''){
        scrollTl = gsap.to(container, {
            ease: "none",
            scrollTrigger: {
                trigger: container,
                invalidateOnRefresh: true,
                // pin: true,
                horizontal: true,
                scrub: 1
            }
        });
    // }

    parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home01 .trigger1',
            start: 'top center',
            end: 'bottom center-=20%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })

    parallaxTl
        .from('#section-home01 .header-content', {duration: 1.5, x: '40%'})
        .from('#section-home01 .moveLeft', {duration: 1.5, x: '40%'}, .5);


    parallaxTl2 = gsap.timeline({
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
        .from('#section-home02 .header-content', {duration: 1.5, x: '40%'})
        .from('#section-home02 .moveLeft', {duration: 1.5, x: '40%'}, .5);
    

    parallaxTl3 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home02 .box-tipos-serv',
            start: 'top center-=10%',
            end: 'bottom center-=20%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })

    parallaxTl3
        .from('#section-home02 .box-icon-service .containerIcon', {duration: .5, opacity: 0, x: '-50%', stagger: .8})
        .from('#section-home02 .box-icon-service .iconHeader', {duration: .5, opacity: 0, x: '20%', stagger: .8}, 0)
        .from('#section-home02 .box-icon-service .iconDescripcion', {duration: .5, opacity: 0, y: '40%',stagger: .8}, 0);

    

    parallaxTl4 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home02 .col-home-servi-03',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        }
    })
    
    parallaxTl4
        .from('#section-home02 .box-gancho', {duration: 1, ease: Back.easeOut.config(1.7), y: '-100%'});
    
    parallaxTl5 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home03 .trigger1',
            start: 'top top+=60%',
            // pin: true,
            scrub: true, // permite que la animacion se vuelva a reproduccion 
            markers: false,
        },
    })

    parallaxTl5
        .from('#section-home03 .header-content', {duration: 1.5, x: '40%'})
        .from('#section-home03 .moveLeft', {duration: 1.5, x: '40%'}, .5)
        .from('#section-home03 .body-content .box-logos', {duration: 0.5, opacity: 0, ease: Back.easeOut.config(1.7), scale: 0,stagger: .8})
        // .to(['.noscroll-full', '.scroll-full'], {duration: 0, css: {overflow: 'hidden'} })
    
}
function animacionHorizontal(){

    // reseteamos
    resetGsap();

    scrollTl = gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            horizontal: false,
            scrub: 1,
            end: () => "+=" + container.offsetWidth
        }
    });

    // Animacion para el home 01

    parallaxTl = gsap.timeline({
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
    
    parallaxTl2 = gsap.timeline({
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
    
    parallaxTl3 = gsap.timeline({
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
    

    parallaxTl4 = gsap.timeline({
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

    parallaxTl5 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '#section-home03 .trigger1',
            start: 'top top+=40%',
            end: 'top top+=10%',
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

let activeDevice = '';

$(function(){

    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
            if (activeDevice == 'movil'){
                activeDevice = 'desk'
                location.reload();
            }else{
                ScrollTrigger.refresh();
                animacionHorizontal();
                // console.log('desk');
                activeDevice = 'desk'
                console.log(activeDevice)
            }
        }, 
        "(max-width: 992px)": function() {
            if (activeDevice == 'desk'){
                activeDevice = 'movil'
                location.reload();
            }else{
                ScrollTrigger.refresh();
                animacionVertical();
                // console.log('movil');
                activeDevice = 'movil'
                console.log(activeDevice)

            }
        }
    
    })

})