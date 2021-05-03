setTimeout(function(){
$(".preloader").fadeOut(300);}
,5000);

$(function () {
  $(".btn").click(function () {
    $(".btn").toggleClass("active");
        $(".play").toggleClass("active");
    $(".small-box").toggleClass("active");
    if($(".small-box").hasClass("active")) {
      $(".small-box").removeClass("pauseToPlay");
    } else {
      $(".small-box").addClass("pauseToPlay");
    }
    // $(input).addClass("active");
  });
});

window.onload = function() {
  var context = new AudioContext();
}
