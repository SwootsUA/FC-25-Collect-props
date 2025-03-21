'use strict';

function buildPage() {
    const text = {
        header: 'Create an account',
        submitButton: 'Ok',
        cancelButton: 'Cancel',
        firstNameInput: 'First name',
        lastNameInput: 'Last name',
        displayNameInput: 'Display Name',
        emailInput: 'Email Address',
        emailError: 'Invalid email address.',
        passwordInput: 'Password',
        confirmPasswordInput: 'Confirm Password',
        passwordError: "Passwords don't match.",
    };

    const container = document.querySelector('.container');

    const form = document.createElement('form');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('heading-container');

    const header = document.createElement('h1');
    header.textContent = text.header;

    headerContainer.append(header);

    const textInputsContainer = document.createElement('div');
    textInputsContainer.classList.add('text-inputs-container');

    const firstNameInput = document.createElement('input');
    firstNameInput.required = true;
    firstNameInput.type = 'text';
    firstNameInput.placeholder = text.firstNameInput;
    firstNameInput.id = 'first-name';

    const lastNameInput = document.createElement('input');
    lastNameInput.required = true;
    lastNameInput.type = 'text';
    lastNameInput.placeholder = text.lastNameInput;
    lastNameInput.id = 'last-name';

    const displayNameInput = document.createElement('input');
    displayNameInput.required = true;
    displayNameInput.type = 'text';
    displayNameInput.placeholder = text.displayNameInput;
    displayNameInput.id = 'display-name';

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('error-container');

    const emailInput = document.createElement('input');
    emailInput.required = true;
    emailInput.type = 'email';
    emailInput.placeholder = text.emailInput;
    emailInput.id = 'email';

    const emailError = document.createElement('div');
    emailError.classList.add('error');
    emailError.innerText = text.emailError;

    emailContainer.append(emailInput, emailError);

    const passwordInput = document.createElement('input');
    passwordInput.required = true;
    passwordInput.type = 'password';
    passwordInput.placeholder = text.passwordInput;
    passwordInput.id = 'password';

    const confirmPasswordContainer = document.createElement('div');
    confirmPasswordContainer.classList.add('error-container');

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.required = true;
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.placeholder = text.confirmPasswordInput;
    confirmPasswordInput.id = 'confirm-password';

    const passwordError = document.createElement('div');
    passwordError.classList.add('error');
    passwordError.innerText = text.passwordError;

    confirmPasswordContainer.append(confirmPasswordInput, passwordError);

    textInputsContainer.append(
        firstNameInput,
        lastNameInput,
        displayNameInput,
        emailContainer,
        passwordInput,
        confirmPasswordContainer
    );

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('form-button', 'submit');
    submitButton.innerText = text.submitButton;

    const cancelButton = document.createElement('button');
    cancelButton.type = 'reset';
    cancelButton.classList.add('form-button', 'cancel');
    cancelButton.innerText = text.cancelButton;

    buttonContainer.append(cancelButton, submitButton);

    form.append(headerContainer, textInputsContainer, buttonContainer);

    container.appendChild(form);
}

buildPage();
