//  set header paddingLeft dependent from hero margin;
const heroTextContainer = document.querySelector('.text-container');
const distanceFromLeft = heroTextContainer.offsetLeft;
const logo = document.querySelector('.logo');
logo.style.paddingLeft = `${distanceFromLeft}px`;