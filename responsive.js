document.querySelector('.btn').addEventListener('click', () => {
    if (window.innerWidth <= 700) {
        const tabElement = document.querySelector('.tab');
        const searchDetailElement = document.querySelector('#search-detail-section');

        
        tabElement.style.display = 'contents';

        
        searchDetailElement.style.height = '500px';
    }
});

document.querySelector('.slider-up').addEventListener('click',()=>{
    const searchDetailElement = document.querySelector('#search-detail-section')
    searchDetailElement.style.height = '500px';
})
document.querySelector('.slider-down').addEventListener('click',()=>{
    const searchDetailElement = document.querySelector('#search-detail-section')
    searchDetailElement.style.height = '10px';
})