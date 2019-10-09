$(document).ready(function () {
    class ScrollBar {
        constructor(){
            this.show = false;
        }
        // add the div we want to use
        appendScrollBar(){
            $('body').append('<div class="scroll position-fixed" style="width:70px; bottom: 100%;right:1em; transition: all .3s ease-in-out">' +
                '<img src="../../File/T--USTC-Software--scroll.png"/>' +
                '<div class="position-relative backHead" style="width: 70px; height: 110px; top: -110px; cursor: pointer;"></div>' +
                '</div>');
        }
        // basic operation
        maintainShow(){
            $(window).scroll(function () {
                let toTop = $(document).scrollTop();
                if (toTop > 300 && !this.show){
                    $(".scroll").css("bottom", "5%");
                    console.log('gt 300px');
                    this.show = true;
                }else if(toTop <= 300 && this.show){
                    $(".scroll").css("bottom", "100%");
                    console.log('lt 300px');
                    this.show = false;
                }
            });
        }
        // make the img clickable
        listenForClick(){
            $('.backHead').on('click', function () {
                $('body, html').animate({
                    scrollTop: 0,
                    screenLeft: 0
                }, 300);
                $(".scroll").css("bottom", "100%");
            });
        }

    }

    let scrollBar = new ScrollBar();
    scrollBar.appendScrollBar();
    scrollBar.maintainShow();
    scrollBar.listenForClick();

});