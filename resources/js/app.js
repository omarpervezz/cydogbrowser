const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
	//Animate Links
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});

	//Hamburger Animation
	hamburger.classList.toggle("toggle");
});


// Header Type = Fixed
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	// var box = $('.nav_bg_adder').height();
	// var header = $('nav').height();

	if (scroll > 20) {
		$("nav").addClass("nav_bg_adder");
	} else {
		$("nav").removeClass("nav_bg_adder");
	}
});

//why cydog slider 
$(document).ready(function () {

	$('.items').slick({
		dots: true,
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
});


/*
Random link button- By JavaScript Kit (http://javascriptkit.com)
Over 300+ free scripts!
This credit MUST stay intact for use
*/

var randomlinks = new Array()

randomlinks[0] = "https://duckduckgo.com/?q="
randomlinks[1] = "https://search.brave.com/search?q="
randomlinks[2] = "https://dogpile.com/serp?q="
randomlinks[3] = "https://google.com/search?q="
randomlinks[4] = "https://search.yahoo.com/search?p="
randomlinks[5] = "https://bing.com/search?q="
randomlinks[6] = "https://www.ecosia.org/search?q="
randomlinks[7] = "https://www.startpage.com/do/dsearch?query="

function randomlink(link) {
	window.location = randomlinks[Math.floor(Math.random() * randomlinks.length)] + link;
}

function qurySearch() {
	const query = window.location.search
	if (query && query.includes("?q=")) {
		const paramList = query.split("?q=");
		if (paramList[paramList.length - 1] !== "")
			randomlink(paramList[paramList.length - 1])
	}
}


//search bar js
$('input').focusin(function () {
	$('.loading').css('display', 'block');
});
$('input').focusout(function () {
	$('.loading').css('display', 'none');
});


//random cyber images
window.addEventListener(`load`, () => {
    document.getElementById(`dice1`).src = `./resources/img/news${getRandomInt(3, 2)}.png`;
    rollCount++;
});
window.addEventListener(`load`, () => {
    document.getElementById(`dice2`).src = `./resources/img/news${getRandomInt(1, 2)}.png`;
    rollCount++;
});
window.addEventListener(`load`, () => {
    document.getElementById(`dice3`).src = `./resources/img/news${getRandomInt(3, 1)}.png`;
    rollCount++;
});
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 4));
}

function newsRandom1(){
	
	let cards = $("#first_ .feed-item-title a");
	for (let i = 0; i < cards.length; i++) {
		let target1 = Math.floor(Math.random() * cards.length - 1) + 1;
		let target2 = Math.floor(Math.random() * cards.length - 1) + 1;
	  cards.eq(target1).before(cards.eq(target2));
	};
}
function newsRandom2(){
	
	let cards = $("#second_ .feed-item-title a");
	for (let i = 0; i < cards.length; i++) {
		let target1 = Math.floor(Math.random() * cards.length - 1) + 1;
		let target2 = Math.floor(Math.random() * cards.length - 1) + 1;
	  cards.eq(target1).before(cards.eq(target2));
	};
}
function newsRandom3(){
	
	let cards = $("#third_ .feed-item-title a");
	for (let i = 0; i < cards.length; i++) {
		let target1 = Math.floor(Math.random() * cards.length - 1) + 1;
		let target2 = Math.floor(Math.random() * cards.length - 1) + 1;
	  cards.eq(target1).before(cards.eq(target2));
	};
}
window.addEventListener('load', function(){
	newsRandom1();
	newsRandom2()
	newsRandom3();
});
