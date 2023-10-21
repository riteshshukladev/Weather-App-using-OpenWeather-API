
let isSlider = true;

document.querySelector('.slider').addEventListener('click', () => {
    isSlider = !isSlider;
    adjustElements();
});

document.addEventListener("DOMContentLoaded", () => {
    adjustElementsOnLoad();
});

document.querySelector('.btn').addEventListener('click', () => {
    adjustElementsOnClick();
});

function adjustElements() {
    if (window.innerWidth <= 600) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');
        const sliderElement = document.querySelector('#search-detail-section .slider');

        tabElement.style.display = 'block';
        

    
        sliderElement.classList.toggle('rotate',isSlider);

        searchDetailElement.style.height = isSlider ? '' : '100%';
    }
}


function adjustElementsOnClick() {
    if (window.innerWidth <= 600) {
        adjustElements();
    }
}

function adjustElementsOnLoad() {
    if (window.innerWidth <= 600) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');
        const sliderElement = document.querySelector('#search-detail-section .slider');

        tabElement.style.display = 'block';
        searchDetailElement.style.height = '100%';
        sliderElement.classList.remove('rotate');
    }
}