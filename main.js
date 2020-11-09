//carousel show automatico

document.addEventListener("DOMContentLoaded", () => {
	const e = document.querySelectorAll(".carousel");

	M.Carousel.init(e, {
		duration: 150,
		dist: -150,
		shift: 5,
		padding: 5,
		numVisible: 5,
		noWrap: false,
		indicators: true,
	});

	let i = 0;
	let instance1 = M.Carousel.getInstance(e[0]);
	setInterval(() => {
		i++;
		if (i >= 5) {
			i = 0;
		} else {
			instance1.next(1);
		}
	}, 2000);
});

//btn change theme
const btn = document.getElementById("btn-theme");
const body = document.getElementById("body");
btn.addEventListener("click", () => {
	btn.classList.toggle("blue");
	body.classList.toggle("dark");
});

//responsive
