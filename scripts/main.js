$(document).ready(function() {

  $('.lazyload').lazyload({
    load: function(element) {
      element.fadeOut(0, function() {
        element.fadeIn(1000);
      });
      console.log("loading");
    },
    trigger: "appear"
  });


  $(window).scroll(function() {
    $(".quote").css("opacity", 1 - $(window).scrollTop() / 350);
  });

  $("section").mouseenter(function() {
    var id = $(this).attr('id');
    id = id.substr(0, id.length - "-section".length);
    $("#main_nav").find('.active-section').removeClass('active-section');
    $("#main_nav").find('#' + id).addClass('active-section');
  });

  $.fn.myScroll = function(where_to) {
    var className = $('#main_nav').attr('class');
    if (className == '') {
      $("#main_nav").slideUp("slow", "swing");
      $('#access_nav').removeClass('hover');

    }
    $('html, body').animate({
      scrollTop: $('[name="' + where_to + '"]').offset().top
    }, 1000);
    return false;
  };


  $('#access_nav').click(function() {
    var accessNavClass = $('#access_nav').attr('class');
    if (accessNavClass == 'icon-menu') {
      $("#main_nav").slideDown("slow", "swing");
      $("#main_nav").removeClass('without_nav');
    } else {
      $("#main_nav").slideUp("slow", "swing");
    }
    $('#access_nav').toggleClass('hover');
  });

  $(window).resize(function() {
    if ($(window).width() > 900) {
      $("#main_nav").slideDown("slow", "swing");
    } else {
      $("#main_nav").slideUp("slow", "swing");
      $('#access_nav').removeClass('hover');
    }
  });

  $('a').click(function() {
    $.fn.myScroll($.attr(this, 'href').substr(1));
  });

});
