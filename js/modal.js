const modalBtn = document.querySelector('#modal-btn');
const modalCard = document.querySelector('#modal-card');
const modalCloseBtn = document.querySelector('#modal-close-btn');

modalBtn.addEventListener('click', () => {
    modalCard.style.display = 'block';
});

modalCloseBtn.addEventListener('click', () => {
    modalCard.style.display = 'none';
});