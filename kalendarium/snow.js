
/* ___________ Hóesés ___________ */

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function letItSnow(){
    var snowflakes = document.querySelectorAll('.snow');
    for (var i = 0; i < snowflakes.length; i++) {
      var snowflake = snowflakes[i];
      snowflake.setAttribute('cx', getRandom(1,100) + '%');
      snowflake.setAttribute('cy', '-' + getRandom(1,100));
      snowflake.setAttribute('r', getRandom(1,3));
    }
  })();


  /* ___________ Kalendár ablakok ____________ */

  $( document ).ready(function() {

    var words = 
    [
      "<a href='../kalendarium/decemberben1.html'>Decemberben</a>", 
      "<a href='../kalendarium/faduc2.html'>Fadúc</a>", 
      "<a href='../kalendarium/csillagzapor3.html'>Csillagzápor</a>", 
      "<a href='../kalendarium/hogomb4.html'>Hógömb</a>", 
      "<a href='../kalendarium/oromillan5.html'>Öröm</a>", 
      "<a href='../kalendarium/magveto6.html'>Magvető</a>", 
      "<a href='../kalendarium/akifazik7.html'>Aki fázik</a>", 
      "<a href='../kalendarium/karacsonyfa8.html'>Karácsonyfa</a>", 
      "sed.", 
      "Eiusmod", 
      "tempor", 
      "a", 
      "enim", 
      "minim", 
      "season",
       "nulla", 
       "dolore", 
       "sint", 
       "id", 
       "est", 
       "laboris", 
       "ut.", 
       "aute", 
       "laborum", 
       "toe"
      ];
  
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
  
    //day=25; // uncomment to skip to 25
  
    // Only work in December
    if(month === 11) {
      // Loop through each calendar window
      $("li").each( function( index ) {
        var adventwindow = index + 1;
        var item = $(this);
  
        /*// Open past windows
        if( day !== adventwindow && adventwindow < day ) {
          window.setTimeout(function(){
            item.children(".adventidoor").addClass("open");
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
            $(this).children(".adventidoor").toggleClass("open");
          }
  
          $(this).removeClass("jiggle");
  
          // If 25th, can show the message
          if(day >= 24 && adventwindow === 24) {
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
      if(day >= 26){
        messageReveal();
      }
  
    }
  
  });