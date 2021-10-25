$ (function(){
    $('.main_slider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnhover:false,
        arrows:false,
        dots:true,
    });

    $('#visual .main_btn i.xi-arrow-left').on('click',function(){
        $(".main_slider").slick('slickPrev');
    });
    $('#visual .main_btn i.xi-arrow-right').on('click',function(){
        $(".main_slider").slick('slickNext');
    });

    $('.main_slider').on('afterChange',function(e,s,c){
        //donsole.log(c);
        $ ('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on')
    });

});