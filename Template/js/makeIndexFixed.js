$(document).ready(function () {
   $(window).scroll(function (ev) {
       let top = $(document).scrollTop();
       let menuTop = $('.autoMenu').offset().top;
       console.log(top, menuTop);
       if(menuTop <= top){
           console.log('is disappearing');
           $('.autoMenu').css({
               "position": "fixed",
               "top": "16px",
               // "left": "1em"
           });
       }

   });
});