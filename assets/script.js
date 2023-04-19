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

let arrowLeft = document.querySelector("#banner .arrow_left");
let arrowRight = document.querySelector("#banner .arrow_right");

	arrowLeft.addEventListener("click", function () {

		alert("fleche gauche")
		console.log("fleche gauche")
});

	arrowRight.addEventListener("click", function () {

		alert("fleche droite")
		console.log("fleche droite")
});

let diaporama = 0
let codeHtml =""
let dots = document.querySelector(".dots");

for(let images = 0; images<slides.length; images++){ 
	
	if(images == diaporama){codeHtml += "<div class='dot dot_selected'></div>"}
	else{
		codeHtml += "<div class='dot'></div>"
	}
}

dots.innerHTML = codeHtml