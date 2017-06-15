$("#dark").click (function () {
  $("footer").addClass("navbar-inverse");
  $("#dark").addClass("active");
  $("#light").removeClass("active");
  $(".navbar").addClass("navbar-inverse");
  $(".panel-heading").addClass("dark-theme");
  $(".panel-heading").css("color" , "#fff");
  $("footer").css("color" , "#fff");
});
$("#light").click (function () {
  $("footer").removeClass("navbar-inverse");
  $("#dark").removeClass("active");
  $("#light").addClass("active");
  $(".navbar").removeClass("navbar-inverse");
 $(".panel-heading").removeClass("dark-theme");
$(".panel-heading").css("color" , "black");
$("footer").css("color", "black");
});

$("#generate").on("click" , function () {

  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(val){
    console.log(val);
  }
);
});
