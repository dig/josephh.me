
/*
 * Handles the container closing and 
 * opening. Uses jQuery library.
 * 
 * @author up885013
 */ 

$(".container > .header > .tools > .toggle").click(
  function() {

    //--- Find content.
    var content = $(this).parents().eq(2).find(".content");
    
    //--- Toggles.
    $(this).toggleClass("fa-angle-up");
    $(this).toggleClass("fa-angle-down");
    $(content).toggleClass("hide");

  }
);