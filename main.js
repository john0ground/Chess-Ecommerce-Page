//  set header paddingLeft equal to hero margin;
window.onload = function() {
    const heroTextContainer = document.querySelector('.text-container');
    const distanceFromLeft = heroTextContainer.offsetLeft;
    const logo = document.querySelector('.logo');
    logo.style.paddingLeft = `${distanceFromLeft}px`;
}

const slideButtons = document.querySelectorAll('[data-carousel-button]');

slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next'? 1 : -1;
        const slides = document
            .querySelector('.carousel')
            .querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        const titlePositive = document.querySelector('.title-positive');
        if (newIndex === 0) titlePositive.style.color = '#371A1D';
        if (newIndex === 1) titlePositive.style.color = 'rgba(255, 255, 255, 0.8)';
        if (newIndex > 1) titlePositive.style.color = '#CFAD9D';
    })
});


const header = document.querySelector('header');
const text = document.querySelectorAll('[data-animate]');

window.addEventListener('scroll', () => {

    const heroText = document.querySelector('.text-container');
    const heroTextRect = heroText.getBoundingClientRect();

    if(heroTextRect.top <= 55) {
        header.style.background = '#371A1D';
        header.style.boxShadow = '0 1px 2px 1px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.background = 'none';
        header.style.boxShadow = 'none';
    }

    //animate text
    text.forEach(p => {
        const distanceFromTop = p.getBoundingClientRect().top;
    
        if (distanceFromTop <= window.innerHeight / 1.3) {
            p.classList.add('animate');
        }
    });
});