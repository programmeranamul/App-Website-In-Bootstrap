$('#tecnology .owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    nav:true,
    dots:false,
  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('#securaty .owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    navText:["<",">"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('#editor .owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    navText:["<span><i class='pr-2 fas fa-arrow-left'></i>Pervious</span>","<span><i class='pr-2 fas fa-arrow-right'></i>Next</span>"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})