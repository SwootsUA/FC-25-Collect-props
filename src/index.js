'use strict';

function save() {
    console.log(this);
}

const submitButton = document.querySelector('.form-button.submit');
submitButton.addEventListener('click', save);
