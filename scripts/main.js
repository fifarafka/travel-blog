$(document).ready(function() {

  section_loaded_counter = 0;
  about_loaded = false;
  articles_loaded = false;
  contact_loaded = false;
  all_loaded = false;

  const sections = ['#about-section', '#articles-section', '#contact-section'];

  function loadAbout(where_to) {
    if (!about_loaded && section_loaded_counter == 0) {
      section_loaded_counter++;
      $("#about-section").load("sections/about.html", function() {
        about_loaded = true;
        console.log("loading_about");
        if (typeof where_to != 'undefined') {
          scrollToSection(where_to);
        }
      });
    }
  };

  function loadContact(where_to) {
    if (!contact_loaded && section_loaded_counter == 0) {
      section_loaded_counter++;
      $("#contact-section").load("sections/contact.html", function() {
        contact_loaded = true;
        all_loaded = true;
        console.log("loading_contact");
        $("#contact-section").css("display", "flex");
        if (typeof where_to != 'undefined') {
          scrollToSection(where_to);
        }
      });
    }
  };

  function loadArticles(where_to) {
    if (!articles_loaded && section_loaded_counter == 0) {
      section_loaded_counter++;
      $("#articles-section").load("sections/articles.html", function() {
        articles_loaded = true;
        console.log("loading_articles");
        if (typeof where_to != 'undefined') {
          scrollToSection(where_to);
        }
      });
    }
  };

  $(window).scroll(function() {
    $(".quote").css("opacity", 1 - $(window).scrollTop() / 350);
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      loadAbout(undefined);
      loadArticles(undefined);
      loadContact(undefined);
      section_loaded_counter = 0;
    }
  });

  $("section").mouseenter(function() {
    var id = $(this).attr('id');
    id = id.substr(0, id.length - "-section".length);
    $("#main_nav").find('.active-section').removeClass('active-section');
    $("#main_nav").find('#' + id).addClass('active-section');
  });

  function myScroll(where_to) {
    var className = $('#main_nav').attr('class');
    if (className == '') {
      $("#main_nav").slideUp("slow", "swing");
      $('#access_nav').removeClass('hover');

    }
    if (!all_loaded) {
      switch (where_to) {
        case "about":
          loadAbout(where_to);
          break;
        case "articles":
          loadAbout(undefined);
          section_loaded_counter = 0;
          loadArticles(where_to);
          break;
        case "contact":
          loadAbout(undefined);
          section_loaded_counter = 0;
          loadArticles(undefined);
          section_loaded_counter = 0;
          loadContact(where_to);
          break;
        default:
      }
    } else {
      scrollToSection(where_to);
    }
    return false;
  };

  function scrollToSection(where_to) {
    $('html, body').animate({
      scrollTop: $('[name="' + where_to + '"]').offset().top
    }, 1000);
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
    myScroll($.attr(this, 'href').substr(1));
  });

});
