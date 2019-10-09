$(document).ready(function () {
   class Background{
      constructor(){

      }
      changeBackground(){
         $("body").css("background", "url('../../File/T--USTC-Software--lhr.svg') 0% 0% no-repeat/ cover");
      }
      changePageCardOpacity(opacity=0.7){
         $("div.card").css("background", "rgba(255, 255, 255, " + opacity + ")");
      }
   }

   let background = new Background();
   background.changeBackground();
   background.changePageCardOpacity(0.6);

});