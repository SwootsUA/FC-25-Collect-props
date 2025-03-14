'use strict';

class Person {
    constructor(firstName, lastName, displayName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.email = email;
    }
}

function save() {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const displayName = document.querySelector('#display-name').value;
    const email = document.querySelector('#email').value;

    if (!firstName || !lastName || !displayName || !email) return;

    const user = new Person(firstName, lastName, displayName, email);

    localStorage.setItem(user.lastName, JSON.stringify(user));
}

const submitButton = document.querySelector('.form-button.submit');
submitButton.addEventListener('click', save);
