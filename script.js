const modalContainer = document.querySelector('.modal-container');
const joinButton = document.querySelector('.join-button');
const closeButton = document.querySelector('.close-button');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const nameValidation = /^[a-zA-Z\s]+$/;

joinButton.addEventListener('click', () => {
    modalContainer.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('is-open');
});

document.addEventListener('keydown', e => {
    e = e || window.e;
    e.key === 'Escape' ? modalContainer.classList.remove('is-open') : false;
});

function validateFirstName() {
    const formattedFirstName = firstName.value
        .replace(/\s+/g, ' ') // Replace consecutive spaces with a single space
        .toLowerCase() // Convert all letters to lowercase
        .replace(/(^|\s)\S/g, function (firstLetter) {
            return firstLetter.toUpperCase(); // Capitalize first letter of each word
        });

    firstName.value = formattedFirstName;

    if (firstName.value.trim() === '') {
        firstName.setCustomValidity('Please enter your first name.');
        firstName.style.border = '2px solid red';
    } else if (!nameValidation.test(firstName.value)) {
        firstName.setCustomValidity('Numbers are not allowed in this field.');
        firstName.style.border = '2px solid red';
    } else {
        firstName.setCustomValidity('');
        firstName.style.border = '2px solid green';
    }
}

lastName.addEventListener('focus', () => {
    validateFirstName();
    firstName.reportValidity();
});

firstName.addEventListener('input', validateFirstName);

