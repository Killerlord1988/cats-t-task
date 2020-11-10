  'use strict';

  var btnScrollUp = document.querySelector('.up-button');

  function scrollUp() {
    console.log('sds');
    // var windowCoords = document.documentElement.clientHeight;
    // (function scroll() {
    //   if (window.pageYOffset < windowCoords) {
    //     window.scrollBy(0, 0);
    //     setTimeout(scroll, 0);
    //   }
    //   if (window.pageYOffset > windowCoords) {
    //     window.scrollTo(0, windowCoords);
    //   }
    // })();
  }

  btnScrollUp.addEventListener('click', scrollUp);
