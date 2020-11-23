$( document ).ready(function() {

    var words = ["akik egyaránt szeretnek kapni és adni", "akik mindig önmagukból adnak", "hogy erőt merítsenek belőle", "hogy megosszák egymással"];
  
    var message = "";
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var scrolled = false;
    var timeDelay = 200;
  
    // function to reveal message
    var cardReveal = function() {
      $("#message").text(message).show();
    }  
  
    day=4; // uncomment to skip to 25
  
    // Only work in December
    if(month >= 11) {
      // Loop through each calendar window
      $("li").each( function( index ) {
        var adventwindow = index + 1;
        var item = $(this);
  
        /*// Open past windows
        if( day !== adventwindow && adventwindow < day ) {
          window.setTimeout(function(){
            item.children(".door").addClass("open");
          }, timeDelay);
        }*/
  
        // timeout offset for past window opening animation
        timeDelay += 100;
  
        // Add words so far to message variable
        if( adventwindow <= day ) {
          var word = words[index];
          $(this).append('<div class="revealed">' + word + '</div>');
          message = message + " " + word;
        }
  
        // Add jiggle animation to current day window
        if(adventwindow === day) {
          $(this).addClass("current");
          $(this).addClass("jiggle");
        }
  
        // On clicking a window, toggle it open/closed and
        // handle other things such as removing jiggle and 25th
        $(this).on("click", function() {
          if(adventwindow <= day) { 
            $(this).children(".door").toggleClass("open");
          }
  
          $(this).removeClass("jiggle");
  
          // If 25th, can show the message
          if(day >= 4 && adventwindow === 4) {
            messageReveal();
  
            // Animate scroll to message if not already done
            if(!scrolled) {
              $('html, body').animate({
                scrollTop: $("#message").offset().top
              }, 2000);
              scrolled = true;
            }
          }
        });
  
      });
  
      // If beyond 24, show message
      if(day >= 4){
        messageReveal();
      }
  
    }
  
  });