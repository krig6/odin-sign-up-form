const modalContainer = document.querySelector('.modal-container');
const joinButton = document.querySelector('.join-button');
const closeButton = document.querySelector('.close-button');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#tel');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const nameValidation = /^[a-zA-Z\s]+$/;
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordLength = 6;

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

function validateLastName() {
    const formattedLastName = lastName.value
        .replace(/\s+/g, ' ') // Replace consecutive spaces with a single space
        .toLowerCase() // Convert all letters to lowercase
        .replace(/(^|\s)\S/g, function (firstLetter) {
            return firstLetter.toUpperCase(); // Capitalize first letter of each word
        });

    lastName.value = formattedLastName;
    if (lastName.value.trim() === '') {
        lastName.setCustomValidity('Please enter your last name.');
        lastName.style.border = '2px solid red';
    } else if (!nameValidation.test(lastName.value)) {
        lastName.setCustomValidity('Numbers are not allowed in this field.');
        lastName.style.border = '2px solid red';
    } else {
        lastName.setCustomValidity('');
        lastName.style.border = '2px solid green';
    }
}

email.addEventListener('focus', () => {
    validateLastName();
    lastName.reportValidity();
});

lastName.addEventListener('input', validateLastName);

function validateEmail() {
    if (!emailValidation.test(email.value)) {
        email.setCustomValidity('Please enter a valid email address.');
        email.style.border = '2px solid red';
    } else {
        email.setCustomValidity('');
        email.style.border = '2px solid green';
    }
}

phoneNumber.addEventListener('focus', () => {
    validateEmail();
    email.reportValidity();
});

email.addEventListener('input', validateEmail);

function validatePassword() {
    if (password.value.trim() === '') {
        password.setCustomValidity('You must enter a password.');
        password.style.border = '2px solid red';
    } else if (password.value.length < passwordLength) {
        password.setCustomValidity('Please enter a password with 6 or more characters.');
        password.style.border = '2px solid red';
    } else {
        password.setCustomValidity('');
        password.style.border = '2px solid green';
    }
}

confirmPassword.addEventListener('focus', () => {
    validatePassword();
    password.reportValidity();
});

password.addEventListener('input', validatePassword);

function isPasswordMatch() {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity('');
        confirmPassword.style.border = '2px solid green';
    } else {
        confirmPassword.setCustomValidity('The passwords do not match. Please try again.');
        confirmPassword.style.border = '2px solid red';
    }
    confirmPassword.reportValidity();
}

confirmPassword.addEventListener('input', isPasswordMatch);

