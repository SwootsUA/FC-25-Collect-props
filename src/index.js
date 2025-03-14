'use strict';

class Person {
    constructor(firstName, lastName, displayName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.email = email;
    }
}

function save(event) {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const displayName = document.querySelector('#display-name').value;
    const email = document.querySelector('#email').value;

    if (
        !firstName ||
        !lastName ||
        !displayName ||
        !email ||
        !isEmailValid(email)
    ) {
        event.preventDefault();
        return;
    }

    const user = new Person(firstName, lastName, displayName, email);

    localStorage.setItem(user.lastName, JSON.stringify(user));
}

function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validateEmail() {
    const emailError = document.querySelector('.email-container > .error');

    if (isEmailValid(this.value)) {
        emailError.classList.remove('active');
    } else {
        emailError.classList.add('active');
    }
}

const submitButton = document.querySelector('.form-button.submit');
submitButton.addEventListener('click', save);

const email = document.querySelector('#email');
email.addEventListener('change', validateEmail);
