// header menu 
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.getElementById("overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
	burgerMenu.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});

	bgOverlay.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});
}

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		navbarMenu.classList.remove("is-active");
		bgOverlay.classList.remove("is-active");
	});
});
$(function () {
	$(document).scroll(function () {
	  var $nav = $(".header-scroll");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

// text Animation 

    //you can change the text, but you need to keep same format [yourtext, color];
let yourtext = [
	["Web App", "#ffd166"],
	["Android App", "#7DE2D1"],
	["ios App", "#DE3C4B"]
  ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 110;
  //how long you want to text stay before overwriting
  let additionalwait = 4;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
	document.getElementById("changingText").innerHTML = out;
	if (x > txt.length - 1) {
	} else {
	  out += txt[x];
	}
	x++;
	if (x == txt.length + 2 + additionalwait) {
	  if (y == yourtext.length - 1) {
		y = 0;
		txt = yourtext[y][0].split("");
		out = "";
		document.getElementById("changingText").innerHTML = out;
		document.getElementById("changingText").style.color = yourtext[y][1];
		x = 0;
	  } else {
		y += 1;
		txt = yourtext[y][0].split("");
		out = "";
		document.getElementById("changingText").innerHTML = out;
		document.getElementById("changingText").style.color = yourtext[y][1];
		x = 0;
	  }
	}
  }, wait);



//   contact us
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


