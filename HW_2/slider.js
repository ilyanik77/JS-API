// Получаем элементы слайдера
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    activeDot(slideIndex);
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    activeDot(slideIndex);
}

// Функция для обновления отображения слайдера
function updateSlider() {
  	slides.forEach((slide, index) => {
    	if (index === slideIndex) {
      		slide.style.display = "block";
    	} else {
    		slide.style.display = "none";
    	}
  	});
}

// Функция изменения кнопок навигации слайдера
function activeDot(index) {
    dots.forEach((item) => item.classList.remove("active_dot"));
    dots[index].classList.add("active_dot");
}

dots.forEach((dot, index) => {
  	dot.addEventListener("click", () => {
    	slideIndex = index;
    	updateSlider();
    	activeDot(slideIndex);
  	});
});





