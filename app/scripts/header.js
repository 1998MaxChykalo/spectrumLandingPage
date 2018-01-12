
var _ = require('./lodash');
$(window).on('scroll', _.debounce(checkHeader,300));
// $(window).on('scroll', checkHeader);
$(window).resize(
    function() {
        header = $(".bottom_header");
        sticky = header.offset();
});

var header = $(".bottom_header");
var sticky = header.offset();

function checkHeader() {
  if ($(window).scrollTop() >= sticky.top) {
    header.addClass("fixed_header");
    adjustWidth();
  } else {
    header.removeClass("fixed_header");
  }
}

function adjustWidth() {
    var parentwidth = $("body").width();
    $(".fixed_header").width(parentwidth);
  }