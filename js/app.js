$(function(){

    $(window).on('scroll', function(){

        var scrolla = $(window).scrollTop();

        if(scrolla >= 50){
            $('.hamburger').addClass('.whenscrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
        }else{
            $('.hamburger').removeClass('.whenscrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    });

});