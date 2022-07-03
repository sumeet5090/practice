
$(document).ready(function(){
    $("#bars").click(function () {
        if ($('#bars').hasClass("is_clicked")) {
            $("nav ul").css({
                'right':'-50%',
            });
            $('#bars').removeClass('is_clicked');
        }
        else {
            $("nav ul").css({
                'right':'0%',
            });
            $('#bars').addClass('is_clicked');
        }    
    });

    $('.banner-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
      });

    //   $(window).scroll(function (event) {
    //     var offset = $(".nav").offset();
        
    //     var scrolldistance = $(this).scrollTop();

    //     if (scrolldistance > offset.top) {
    //         $(".nav").css({
    //             top: offset.top,
    //         });
    //         $(".nav").animate({
    //             top: 0
    //         }, 1000);
    //     } else {
            
    //     }
    //   });
});