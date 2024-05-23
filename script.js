const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const joinButton = document.querySelector('.join-button');

joinButton.addEventListener('click', () => {
    modalContainer.classList.add('is-open');
    body.style.overflow = "hidden";
});