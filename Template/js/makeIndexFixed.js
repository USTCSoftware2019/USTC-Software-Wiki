$(document).ready(function () {
   $(window).ready(function (ev) {
       let top = $(document).scrollTop();
       let menuTop = $('.autoMenu').offset().top;
       let height = $('#autoMenu').height();
       console.log(top, menuTop);
       top = Number.MAX_SAFE_INTEGER;

       if(menuTop <= top){
           console.log('is disappearing');
           $('.autoMenu').css({
               "position": "fixed",
               "top": "calc(50% - " + height/2 + "px)",
               // "left": "1em"
           });
       }

   });
});