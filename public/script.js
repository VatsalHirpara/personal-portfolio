$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
          console.log('clicked');
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });