const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const joinButton = document.querySelector('.join-button');
const closeButton = document.querySelector('.close-button');

joinButton.addEventListener('click', () => {
    modalContainer.classList.add('is-open');
    body.style.overflow = "hidden";
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('is-open');
    body.style.overflow = "initial";
})