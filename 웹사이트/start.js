const menubtn = document.querySelector('.navbar_menubtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

menubtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})