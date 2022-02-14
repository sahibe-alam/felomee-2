


// script of Ai section 
$(document).ready(function() {
    $("input[name$='cars']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Cars" + test).show();
    });
});
// script for file include
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });