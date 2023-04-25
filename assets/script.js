const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let diaporama = 0
let arrowLeft = document.querySelector("#banner .arrow_left");
let arrowRight = document.querySelector("#banner .arrow_right");
let imageSlider = document.querySelector(".banner-img");
let texteSlider = document.querySelector("#banner p");


function bulletPoints() {
	let codeHtml =""
let dots = document.querySelector(".dots");

for(let images = 0; images<slides.length; images++){ 

	if(images == diaporama){codeHtml += "<div class='dot dot_selected'></div>"}
	else{
		codeHtml += "<div class='dot'></div>"
	}
}

dots.innerHTML = codeHtml
}

bulletPoints()

	arrowLeft.addEventListener("click", function () {
		diaporama = diaporama - 1;

		if(diaporama < 0) {
			diaporama = 3
		}
		
		imageSlider.src = "./assets/images/slideshow/" + slides[diaporama].image;
		texteSlider.innerHTML = slides[diaporama].tagLine;
		bulletPoints();
});

	arrowRight.addEventListener("click", function () {
		diaporama = diaporama + 1;

	if(diaporama > 3) {
		diaporama = 0
	}
		imageSlider.src = "./assets/images/slideshow/" + slides[diaporama].image;
		texteSlider.innerHTML = slides[diaporama].tagLine;
		bulletPoints();
});