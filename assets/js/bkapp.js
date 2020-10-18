
var controller;

function animationHorizontal(){

    // controller.removeScene([scene, scene2, scene3]);

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
    

    // var tween = TweenMax.to("#car", 0.5, {left: 30});

    var tween = new gsap.timeline();
    tween.to("#car", {x: 18, duration: .5})

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 80})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer",  duration: $(window).width(), offset: 0})
            // .setTween(tween)
            // .setPin("#parallaxContainer")
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer2", duration:  $(window).width()})
            // .setTween(tween)
            // .setPin("#parallaxContainer")
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


}


function animationVertical(){


    if (controller != undefined ){
        controller = controller.destroy(true);
    }


    controller = new ScrollMagic.Controller({
        vertical: true,
        globalSceneOptions: {
            triggerHook: 0,
        }
    });
    

    // var tween = TweenMax.to("#car", 0.5, {left: 30});

    var tween = new gsap.timeline();
    tween.to("#m_car", {x: 18, duration: .5})

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#m_trigger", duration: 80})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#movil_About",  duration: $(window).width(), offset: 0})
            // .setTween(tween)
            // .setPin("#parallaxContainer")
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#movil_Page3", duration:  $(window).width()})
            // .setTween(tween)
            // .setPin("#parallaxContainer")
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}

$(document).ready(function(){
    
    // animationVertical();
    // animationHorizontal();

    var mediaqueryList = window.matchMedia("(min-width: 992px)");
    if(mediaqueryList.matches) {
        animationHorizontal()
    }else{
        animationVertical()
    }

    $( window ).resize(function() {
        var mediaqueryList = window.matchMedia("(min-width: 992px)");
        if(mediaqueryList.matches) {
            animationHorizontal()
        }else{
            animationVertical()
        }
    });

})