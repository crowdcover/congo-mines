$(document).ready(function(){
  var mainbottom = $('.menu').offset().top;

  $(window).on('scroll',function(){

      stop = Math.round($(window).scrollTop());
      if (stop > mainbottom) {
          $('.menu').addClass('past-main');
      } else {
          $('.menu').removeClass('past-main');
      }
  });

  $("#hideshow").click(function(){
    $("#advanced").slideToggle(500);
  });

});
