$(document).ready(function() {
  var active = 3;
  var animationPaused = false;
  const dots = ['#dot1', '#dot2', '#dot3', '#dot4', '#dot5'];
  const imgs = ['#one', '#two', '#three', '#four', '#five'];

  function dotClicked(which) {
    $(dots[active - 1]).css("background", "rgba(0, 0, 0, 0.4)");
    $(imgs[active - 1]).css("z-index", "8");
    $(dots[which - 1]).css("background", "rgba(255, 255, 255, 0.6)");
    $(imgs[which - 1]).css("z-index", "9");
    var imgClicked = $(imgs[which - 1]);
    imgClicked.animate({
      opacity: '1'
    }, "slow");
    var imgActive = $(imgs[active - 1]);
    imgActive.animate({
      opacity: '0'
    }, "slow");
    active = which;
  }


  function nextPhoto() {
    if (active == 5) {
      dotClicked(1);
    } else {
      var next = active + 1;
      dotClicked(next);
    }
  };

  function prevPhoto() {
    if (active == 1) {
      dotClicked(5)
    } else {
      var prev = active - 1;
      dotClicked(prev);
    }
  };

  $('#i1').click(function() {
    dotClicked(1);
    animationPaused = true;
  });

  $('#i2').click(function() {
    dotClicked(2);
    animationPaused = true;
  });

  $('#i3').click(function() {
    dotClicked(3);
    animationPaused = true;
  });

  $('#i4').click(function() {
    dotClicked(4);
    animationPaused = true;
  });

  $('#i5').click(function() {
    dotClicked(5);
    animationPaused = true;
  });

  $('#next').click(function() {
    nextPhoto();
    animationPaused = true;
  });

  $('#prev').click(function() {
    prevPhoto();
    animationPaused = true;
  });

  dotClicked(1);
  var animationSlider = setInterval(function() {
    if (!animationPaused) {
      nextPhoto();
    } else {
      animationPaused = false;
    }
  }, 5000);

});
