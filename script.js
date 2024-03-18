const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moblile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('heder.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    moblile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    var header = document.querySelector('.header'); // Define your header selector
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
