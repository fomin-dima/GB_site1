'use script';

let barIcon = document.querySelector('.barIcon');
let brandDark = document.querySelector('.brandDark');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

barIcon.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);