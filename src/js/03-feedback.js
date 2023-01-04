import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-msg';
const formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input')

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log(formData);
}

function populateForm() {
    const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    if(parsedMessage) {
        if(parsedMessage.email === undefined) {
            parsedMessage.email = "";
        }
        if(parsedMessage.message === undefined) {
            parsedMessage.message = "";
        }
        input.value = parsedMessage.email;
        textarea.value = parsedMessage.message;
    }
}