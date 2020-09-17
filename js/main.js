$(document).ready(function(){
    $(".author-slider").owlCarousel({
        items:1,
        loop:true,
        items:3,
        lazyload:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:false,
        dots:true,
        center:true,
        navText:[' <i class="lni lni-chevron-left"></i>','<i class="lni lni-chevron-right"></i>'],
        responsiveClass:true,
        responsiveRefreshRate:true,
        responsive: {
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:1
            },
            1100:{
                items:1
            },
            1920:{
                items:1
            }
        }

    });

    $(".carousle-me-top").owlCarousel({
        items:4,
        loop:true,
        items:3,
        lazyload:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:false,
        dots:true,
        center:true,
        navText:[' <i class="lni lni-chevron-left"></i>','<i class="lni lni-chevron-right"></i>'],
        responsiveClass:true,
        responsiveRefreshRate:true,
        responsive: {
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1920:{
                items:1
            }
        }

    });
});

//scrollup
$(window).scroll(function () {
    if ($(this).scrollTop() >100) {
    $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html,body").animate ({
        scrollTop: 0
    }, 800);
    return false;
    });