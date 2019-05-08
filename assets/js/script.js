$(document).scroll(function(){
    
    var s = $(document).scrollTop();
    console.log(s)
    if (s>200){
        $(".fixed-header").addClass("visible");
    }
    else{
        $(".fixed-header").removeClass("visible");
    }


})



$(".burger, .clos").click(function(){
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflowed");
})

$(".call").click(function(){
    $(".overlay-bg").fadeIn(300);
    $(".transf").addClass("active-modal");
    $("body").toggleClass("overflowed");
})


$(".close").click(function(){
    $(".modal").removeClass("active-modal");
    $(".overlay-bg").fadeOut(300);
    $("body").toggleClass("overflowed");
})

$(".service").click(function(){
    $(".overlay-bg").fadeIn(300);
    $(".serv").addClass("active-modal");
    $("body").toggleClass("overflowed");
})



let backgrounds=['slide1.png','service2.png','service1.png'];
let slide = 0,
    maxSlide=backgrounds.length-1;
    console.log(maxSlide)
    $("#right").click(function(){
        if (slide<maxSlide){
            slide++;
            let bg = backgrounds[slide];
            $(".slider__container").css("background-image","url(./assets/img/"+bg+")")
            console.log(slide,bg)
        }
        else{
            slide=0;
            let bg = backgrounds[slide];
            $(".slider__container").css("background-image","url(./assets/img/"+bg+")")        }
    })
    $("#left").click(function(){
        if (slide>0){
            slide--;
            let bg = backgrounds[slide];
            $(".slider__container").css("background-image","url(./assets/img/"+bg+")")        }
        else{
            slide=maxSlide;
            let bg = backgrounds[slide];
            $(".slider__container").css("background-image","url(./assets/img/"+bg+")")        }
    })