
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


  $("button").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });


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
      "<a href='../kalendarium/level9.html'>Levél</a>", 
      "<a href='../kalendarium/teafilter10.html'>Teafilter</a>", 
      "<a href='../kalendarium/toll11.html'>Toll</a>", 
      "<a href='../kalendarium/csendul12.html'>Csendül</a>", 
      "<a href='../kalendarium/januar13.html'>Január</a>", 
      "<a href='../kalendarium/fenyoszagu14.html'>Fenyőszagú</a>", 
      "<a href='../kalendarium/rajzolt15.html'>Rajzolt</a>",
       "<a href='../kalendarium/hoember16.html'>Hóember</a>", 
       "<a href='../kalendarium/rejtett17.html'>Rejtett</a>", 
       "<a href='../kalendarium/mezeskalacsos18.html'>Mézeskalácsos</a>", 
       "<a href='../kalendarium/recept19.html'>Recept</a>", 
       "<a href='../kalendarium/lisztho20.html'>Liszthó</a>", 
       "<a href='../kalendarium/angyal21.html'>Angyal</a>", 
       "<a href='../kalendarium/cinke22.html'>Cinke</a>", 
       "<a href='../kalendarium/tintakrol23.html'>Tintákról</a>", 
       "<a href='../kalendarium/gyertyafeny24.html'>Gyertyafény</a>"
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
  
    day=24; // uncomment to skip to 25
  
    // Only work in December
    if(month === 12) {
      // Loop through each calendar window
      $("li").each( function( index ) {
        var adventwindow = index + 1;
        var item = $(this);
  
        // Open past windows
        if( day !== adventwindow && adventwindow < day ) {
          window.setTimeout(function(){
            item.children(".adventidoor").addClass("open");
          }, timeDelay);
        }
  
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