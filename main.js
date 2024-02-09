const hamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
  console.log('sss')
});

navLinks.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
  console.log('sss')
});