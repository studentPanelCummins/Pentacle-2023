const slides = document.querySelectorAll(".slide")
var counter = 0;

console.log(slides);
slides.forEach(
	(slide,index) => {
		slide.style.left = `${index*100}%`
	}
)

const slideImg = () => {
	slides.forEach(
		(slide) => {
			slide.style.transform = `translateX(-${(counter%18)*100}%)`;

		}

	)
}

const goNext = () => {
	counter++;
	slideImg();
}
const goBack = () => {
	counter--;
	slideImg();
}
setInterval(goNext,2000);
