const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})