WebFont.load({
    google: {
        families: ["Work Sans:300,regular,600,700,800,italic,600italic,700italic,800italic"]
    }
});

 ! function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);


  /* Sample function that returns boolean in case the browser is Internet Explorer*/
  function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
}
/* Create an alert to show if the browser is IE or not */
if (isIE()) {
    alert('This site is not supported on the Internet Explorer browser. Please view on the latest version of Chrome or Firefox for the best experience.');
    /* }else{
        alert('It is NOT InternetExplorer');*/
}




if (window.addEventListener) {
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function (e) {
        keys.push(e.keyCode);
        if (keys.toString().indexOf(konami) >= 0) {
            alert('You think you fancy huh? 🖖');
            keys = [];
        };
    }, true);
};


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