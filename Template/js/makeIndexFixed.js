$(document).ready(function () {
    // to do things with pageIndex
    class PageIndex {
        constructor(){
            console.log('new PageIndex');
        }
        // set the index fixed
        static makeIndexFixed(){
            let height = $('#autoMenu').height();
            $('.autoMenu').css({
                "position": "fixed  ",
                "top": "calc(50vh - " + height/2 + "px)",
            });
        }
        // add animation to the scroll event
        static scrollToAnchor() {
            $('.autoMenu a').on('click', function (ev) {
                ev.preventDefault();
                let anchorId = $(this).attr('href');
                let nextTop = $(anchorId).offset().top;
                $('html, body').animate({
                    scrollTop: nextTop,
                }, 600);
            })
        }
    }

    PageIndex.makeIndexFixed();
    PageIndex.scrollToAnchor();
});