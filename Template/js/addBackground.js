$(document).ready(function () {
   class Background{
      constructor(){

      }
      static changeBackground(){
         $("body").css("background", "url('../../File/T--USTC-Software--lhr.svg') 0% 0% no-repeat/ cover");
      }
      static changePageCardOpacity(opacity=0.7){
         $("div.card").css("background", "rgba(255, 255, 255, " + opacity + ")");
      }
   }

   let background = new Background();
   Background.changeBackground();
   Background.changePageCardOpacity(0.6);

});