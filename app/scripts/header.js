
$(window).on('scroll',function() {myFunction()});

$(window).resize(
    function() {
        header = $(".bottom_header");
        sticky = header.offset();
});

var header = $(".bottom_header");
var sticky = header.offset();

function myFunction() {
  if ($(window).scrollTop() >= sticky.top) {
    header.addClass("fixed_header");
    adjustWidth();
  } else {
    header.removeClass("fixed_header");
  }
}
// 109
function adjustWidth() {
    var parentwidth = $("body").width();
    $(".fixed_header").width(parentwidth*.92);
  }