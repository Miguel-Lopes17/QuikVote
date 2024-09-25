const slides = document.querySelector('.slide');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // Inclui a margem de 10px de cada lado
let currentIndex = 0;

function moveSlide(step) {
    const totalCards = cards.length;
    const visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);
    const totalSlides = Math.ceil(totalCards / visibleCards);

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransformValue = -currentIndex * visibleCards * cardWidth;
    slides.style.transform = `translateX(${newTransformValue}px)`;
}

