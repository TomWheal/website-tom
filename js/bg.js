/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
var delay=1000;

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function() {
    particleground(document.getElementById('bg'), {
    dotColor: '#249903',
    lineColor: '#556e4e'
  });
  var intro = document.getElementById('footer');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }, delay);
});


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
