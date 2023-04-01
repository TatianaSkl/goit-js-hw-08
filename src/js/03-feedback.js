import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
messageInput.addEventListener('input', throttle(saveStateToLocalStoraget, 500));
emailInput.addEventListener('input', throttle(saveStateToLocalStoraget, 500));

function saveStateToLocalStoraget() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const restoreStateFromLocalStorage = () => {
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (state) {
    emailInput.value = state.email || '';
    messageInput.value = state.message || '';
  }
};
restoreStateFromLocalStorage();
