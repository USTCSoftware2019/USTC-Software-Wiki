$(document).ready(function () {
    // add the div we want to use
    $('body').append('<div class="scroll position-fixed" style="width:70px; bottom: 100%;right:1em; transition: all .3s ease-in-out">' +
        '<img src="../../File/T--USTC-Software--scroll.png"/>' +
        '<div class="position-relative backHead" style="width: 70px; height: 110px; top: -110px; cursor: pointer;"></div>' +
        '</div>');

    // basic operation
    let show = false;
    $(window).scroll(function () {
        let toTop = $(document).scrollTop();
        if (toTop > 300 && !show){
            $(".scroll").css("bottom", "5%");
            console.log('gt 300px');
            show = true;
        }else if(toTop <= 300 && show){
            $(".scroll").css("bottom", "100%");
            console.log('lt 300px');
            show = false;
        }
    });

    // make the img clickable
    $('.backHead').on('click', function () {
        $('body, html').animate({
            scrollTop: 0,
            screenLeft: 0
        }, 300);
        $(".scroll").css("bottom", "100%");
    });

});