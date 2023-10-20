
document.addEventListener("DOMContentLoaded", () => {
    adjustElementsOnLoad();
});

document.querySelector('.btn').addEventListener('click', () => {
    adjustElementsOnClick();
});

document.querySelector('.slider-up').addEventListener('click', () => {
    adjustElementsOnClick();
});

document.querySelector('.slider-down').addEventListener('click', () => {
    if (window.innerWidth <= 600) {
        const searchDetailElement = document.querySelector('#search-detail-section');
        searchDetailElement.style.height = '';
    }
});

function adjustElementsOnLoad() {
    if (window.innerWidth <= 600 ) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');

        tabElement.style.display = 'block';
        searchDetailElement.style.height = '100%';
    }
}

function adjustElementsOnClick() {
    if (window.innerWidth <= 600) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');

        tabElement.style.display = 'block';
        searchDetailElement.style.height = '100%';
    }
}
