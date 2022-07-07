$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        Boolean:true,
        Number:50,
        autoplay:true,
        autoplayTimeout: 3000,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
        }
    });
});
