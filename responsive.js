document.querySelector('.btn').addEventListener('click', () => {
    // Check if the window width is below a certain threshold (e.g., 768 pixels for tablets and smaller)
    if (window.innerWidth <= 700) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');

        // Increase the width
        tabElement.style.display = 'contents';

        // Increase the height
        searchDetailElement.style.height = '500px';
    }
});
