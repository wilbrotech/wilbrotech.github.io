// Change navbar background-color on scroll
    
    $(document).ready(function(){
        $(".navbar-toggler").click(function(){
            $(".navbar-toggler").toggleClass("toggle");
        });
    });

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

// Slick

window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
   
// Initial AOS
