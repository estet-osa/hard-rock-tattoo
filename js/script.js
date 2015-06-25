$(document).ready(function(){
    try{
        $('.phone_mask, .mask').mask('+7 (999) 999 99 99');

        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

        var window_wigth = $(window).width();
        console.log(window_wigth);

        if ( window_wigth >= 320 && window_wigth < 479) {
            $('.offers_slider').bxSlider({
                pager: false,
                slideWidth: 240,
                maxSlides: 1,
                minSlides: 1,
                moveSlides: 1,
                slideMargin: 20
            });
        } else {
            if ( window_wigth >= 480 && window_wigth < 767) {
                $('.offers_slider').bxSlider({
                    pager: false,
                    slideWidth: 390,
                    maxSlides: 1,
                    minSlides: 1,
                    moveSlides: 1,
                    slideMargin: 20
                });
            }else{
                $('.offers_slider').bxSlider({
                    pager: false,
                    slideWidth: 590,
                    maxSlides: 1,
                    minSlides: 1,
                    moveSlides: 1,
                    slideMargin: 20
                });
            }
        }
    }
    catch(e){
        console.log(e.name);
    }
});