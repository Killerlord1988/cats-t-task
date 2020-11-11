  'use strict';

  var btnScrollUp = document.querySelector('.up-button');

  function showBtnScrollUp() {
    if (window.pageYOffset > 200) {
      btnScrollUp.classList.add('up-button--show')
    } else {
    btnScrollUp.classList.remove('up-button--show')
  }
}

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  btnScrollUp.addEventListener('click', scrollUp);
  window.addEventListener('scroll', showBtnScrollUp);
