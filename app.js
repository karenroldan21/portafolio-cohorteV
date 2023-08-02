let darkIcon = document.querySelector("i.bi.bi-moon-stars-fill");
let lightIcon = document.querySelector("i.bi.bi-lightbulb-fill");
let colorDocument = document.querySelector("link#colorDocumento");
let hojaEstilo = colorDocument.getAttribute('href');

function color() {
	let hojaEstilo = colorDocument.getAttribute('href');
	switch (hojaEstilo) {
	case 'styles.css':
		darkIcon.style.display = "none";
		lightIcon.style.display = "block";
		colorDocument.setAttribute('href', 'stylesDark.css');
		break;
	default: 
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
		colorDocument.setAttribute('href', 'styles.css');
		break;
	}
}
