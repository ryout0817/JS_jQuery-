/*global $*/
$(function () {
  var ms = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
  
  var timer;

    $('#start').click(function() {
    ms = 0;
    sec = 0;
    min = 0;
    hour = 0;
    $('#clock').html('0:0:0:0');
    timer = setInterval(count, 100);

    $(this).prop('disabled', true);
    $('#stop,#reset').prop('disabled', false);
  });

  $('#stop').click(function() {
    clearInterval(timer);

    $(this).prop('disabled', true);
    $('#start,#restart').prop('disabled', false);
  });


  $('#reset').click(function() {
      ms = 0;
      sec = 0;
      min = 0;
      hour = 0;
      $('#clock').html('0:0:0:0');
      clearInterval(timer);
      
      $('#stop,#reset').prop('disabled', true);
      $('#start').prop('disabled', false);
  });

  function count()
  {
    ms += 1;
    if(ms > 9) {
      ms = 0;
      sec += 1;
    }
      if (sec > 59) {
          sec = 0;
          min += 1;
      }
          if (min > 59) {
             min = 0;
             hour += 1;
    }
    $('#clock').html(hour + ':' +  min + ':' + sec + ':' + ms);
  }
});