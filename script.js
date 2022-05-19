'use script';

let brandDark = document.querySelector('.brandDark');
let barIcon = document.querySelector('.barIcon');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

barIcon.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);