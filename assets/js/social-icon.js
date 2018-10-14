
/*
 * Handles the text that appears when you hover
 * over the social media icons.
 * 
 * @author Joseph
 * @copyright josephh.uk 2018
 */ 

$("*[data-icon-text]").hover(
  function() {
    var text = $(this).data("icon-text");
    var position = $(this).position();
    var sbHeight = $(".sidebar").position().top;

    $("#icon-text").html(text);
    $("#icon-text").css("top", sbHeight + position.top - 22.5 + "px");
    $("#icon-text").css("left", position.left + 65 + "px");

    $("#icon-text").css("display", "");
  }, function() {
    $("#icon-text").css("display", "none");
  }
);