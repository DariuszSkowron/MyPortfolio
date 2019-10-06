/*Select DOM items*/
const menuBtn = document.querySelector('.menu-btn, .menu-btnResume');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const links = document.querySelectorAll('.menu-nav li a');

/*Set initial state of menu*/
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click', toggleMenu);
}

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        /*Set Menu State*/
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        /*Set Menu State*/
        showMenu = false;
    }
}


