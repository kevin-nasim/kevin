let bar = document.querySelector(".progress-bar");
let percent = document.querySelector("h1");
let counter = 0;

let progressBar = setInterval(function () {
	bar.style.width = `${counter}%`;
	percent.innerHTML = `${counter}%`;
	counter++;
	if (counter === 99) {
		window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
		clearInterval(progressBar);
	}
}, 100);
