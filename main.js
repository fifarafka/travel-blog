$(document).ready(function() {
  var clicked = "";
  var animationSlider;
  var animationPaused = false;

  $(window).scroll(function(){
    $(".quote").css("opacity", 1 - $(window).scrollTop() / 350);
  });

  $("section").mouseenter(function(){
   	 var id = $(this).attr('id');
     console.log(id);
   });

  $.fn.myFunction = function(where_to) {
    var className = $('#main_nav').attr('class');
    if (className == 'with_nav') {
      $("#main_nav").slideUp("slow", "swing");
      $('#access_nav').removeClass('hover');

    }
    $('html, body').animate({
      scrollTop: $('[name="' + where_to + '"]').offset().top
    }, 1000);
    return false;
  };


  $('#access_nav').click(function() {
    console.log("here");
    var accessNavClass = $('#access_nav').attr('class');
    if (accessNavClass == 'icon-menu') {
      $("#main_nav").slideDown("slow", "swing");
      $('#main_nav').removeClass('without_nav');
      $('#main_nav').addClass('with_nav');
    } else {
      $("#main_nav").slideUp("slow", "swing");
    }
    $('#access_nav').toggleClass('hover');
  });

  $('#contact').click(function() {
    $.fn.myFunction($.attr(this, 'href').substr(1));
  });

  $('#about').click(function() {
    $.fn.myFunction($.attr(this, 'href').substr(1));
  });

  $('#home').click(function() {
    $.fn.myFunction($.attr(this, 'href').substr(1));
  });

  $.fn.clickedOne = function() {
    var img1 = $("#one");
    var img2 = $("#two");
    var img3 = $("#three");
    var img4 = $("#four");
    var img5 = $("#five");
    $("#dot1").css("background", "rgba(255, 255, 255, 0.6)");
    $("#one").css("z-index", "9");
    $("#dot2").css("background", "rgba(0, 0, 0, 0.4)");
    $("#two").css("z-index", "8");
    $("#dot3").css("background", "rgba(0, 0, 0, 0.4)");
    $("#three").css("z-index", "8");
    $("#dot4").css("background", "rgba(0, 0, 0, 0.4)");
    $("#four").css("z-index", "8");
    $("#dot5").css("background", "rgba(0, 0, 0, 0.4)");
    $("#five").css("z-index", "8");
    img1.animate({
      opacity: '1'
    }, "slow");
    img2.animate({
      opacity: '0'
    }, "slow");
    img3.animate({
      opacity: '0'
    }, "slow");
    img4.animate({
      opacity: '0'
    }, "slow");
    img5.animate({
      opacity: '0'
    }, "slow");
    return "one";
  };

  $.fn.clickedTwo = function() {
    var img1 = $("#one");
    var img2 = $("#two");
    var img3 = $("#three");
    var img4 = $("#four");
    var img5 = $("#five");
    $("#dot2").css("background", "rgba(255, 255, 255, 0.6)");
    $("#two").css("z-index", "9");
    $("#dot1").css("background", "rgba(0, 0, 0, 0.4)");
    $("#one").css("z-index", "8");
    $("#dot3").css("background", "rgba(0, 0, 0, 0.4)");
    $("#three").css("z-index", "8");
    $("#dot4").css("background", "rgba(0, 0, 0, 0.4)");
    $("#four").css("z-index", "8");
    $("#dot5").css("background", "rgba(0, 0, 0, 0.4)");
    $("#five").css("z-index", "8");
    img2.animate({
      opacity: '1'
    }, "slow");
    img1.animate({
      opacity: '0'
    }, "slow");
    img3.animate({
      opacity: '0'
    }, "slow");
    img4.animate({
      opacity: '0'
    }, "slow");
    img5.animate({
      opacity: '0'
    }, "slow");
    return "two";
  };

  $.fn.clickedThree = function() {
    var img1 = $("#one");
    var img2 = $("#two");
    var img3 = $("#three");
    var img4 = $("#four");
    var img5 = $("#five");
    $("#dot3").css("background", "rgba(255, 255, 255, 0.6)");
    $("#three").css("z-index", "9");
    $("#dot2").css("background", "rgba(0, 0, 0, 0.4)");
    $("#two").css("z-index", "8");
    $("#dot1").css("background", "rgba(0, 0, 0, 0.4)");
    $("#one").css("z-index", "8");
    $("#dot4").css("background", "rgba(0, 0, 0, 0.4)");
    $("#four").css("z-index", "8");
    $("#dot5").css("background", "rgba(0, 0, 0, 0.4)");
    $("#five").css("z-index", "8");
    img3.animate({
      opacity: '1'
    }, "slow");
    img1.animate({
      opacity: '0'
    }, "slow");
    img2.animate({
      opacity: '0'
    }, "slow");
    img4.animate({
      opacity: '0'
    }, "slow");
    img5.animate({
      opacity: '0'
    }, "slow");
    return "three";
  };

  $.fn.clickedFour = function() {
    var img1 = $("#one");
    var img2 = $("#two");
    var img3 = $("#three");
    var img4 = $("#four");
    var img5 = $("#five");
    $("#dot4").css("background", "rgba(255, 255, 255, 0.6)");
    $("#four").css("z-index", "8");
    $("#dot2").css("background", "rgba(0, 0, 0, 0.4)");
    $("#two").css("z-index", "8");
    $("#dot1").css("background", "rgba(0, 0, 0, 0.4)");
    $("#one").css("z-index", "8");
    $("#dot3").css("background", "rgba(0, 0, 0, 0.4)");
    $("#three").css("z-index", "8");
    $("#dot5").css("background", "rgba(0, 0, 0, 0.4)");
    $("#five").css("z-index", "8");
    img4.animate({
      opacity: '1'
    }, "slow");
    img1.animate({
      opacity: '0'
    }, "slow");
    img2.animate({
      opacity: '0'
    }, "slow");
    img3.animate({
      opacity: '0'
    }, "slow");
    img5.animate({
      opacity: '0'
    }, "slow");
    return "four";
  };

  $.fn.clickedFive = function() {
    var img1 = $("#one");
    var img2 = $("#two");
    var img3 = $("#three");
    var img4 = $("#four");
    var img5 = $("#five");
    $("#dot5").css("background", "rgba(255, 255, 255, 0.6)");
    $("#five").css("z-index", "9");
    $("#dot2").css("background", "rgba(0, 0, 0, 0.4)");
    $("#two").css("z-index", "8");
    $("#dot1").css("background", "rgba(0, 0, 0, 0.4)");
    $("#one").css("z-index", "8");
    $("#dot4").css("background", "rgba(0, 0, 0, 0.4)");
    $("#four").css("z-index", "8");
    $("#dot3").css("background", "rgba(0, 0, 0, 0.4)");
    $("#three").css("z-index", "8");
    img5.animate({
      opacity: '1'
    }, "slow");
    img1.animate({
      opacity: '0'
    }, "slow");
    img2.animate({
      opacity: '0'
    }, "slow");
    img4.animate({
      opacity: '0'
    }, "slow");
    img3.animate({
      opacity: '0'
    }, "slow");
    return "five";
  };

  $.fn.nextPhoto = function() {
    if (clicked == "" || clicked == "five") {
      clicked = $.fn.clickedOne();
    } else if (clicked == "one") {
      clicked = $.fn.clickedTwo();
    } else if (clicked == "two") {
      clicked = $.fn.clickedThree();
    } else if (clicked == "three") {
      clicked = $.fn.clickedFour();
    } else if (clicked == "four") {
      clicked = $.fn.clickedFive();
    }
  };

  $.fn.prevPhoto = function() {
    if (clicked == "three") {
      clicked = $.fn.clickedTwo();
    } else if (clicked == "two" || clicked == "") {
      clicked = $.fn.clickedOne();
    } else if (clicked == "one") {
      clicked = $.fn.clickedFive();
    } else if (clicked == "four") {
      clicked = $.fn.clickedThree();
    } else if (clicked == "five") {
      clicked = $.fn.clickedFour();
    }
  };

  $('#i1').click(function() {
    clicked = $.fn.clickedOne();
    animationPaused = true;
  });

  $('#i2').click(function() {
    clicked = $.fn.clickedTwo();
    animationPaused = true;
  });

  $('#i3').click(function() {
    clicked = $.fn.clickedThree();
    animationPaused = true;
  });

  $('#i4').click(function() {
    clicked = $.fn.clickedFour();
    animationPaused = true;
  });

  $('#i5').click(function() {
    clicked = $.fn.clickedFive();
    animationPaused = true;
  });

  $('#next').click(function() {
    $.fn.nextPhoto();
    animationPaused = true;
  });

  $('#prev').click(function() {
    $.fn.prevPhoto();
    animationPaused = true;
  });

  clicked = $.fn.clickedOne();
  animationSlider = setInterval(function() {
    if (!animationPaused) {
      $.fn.nextPhoto();
    } else {
      animationPaused = false;
    }
  }, 5000);

});
