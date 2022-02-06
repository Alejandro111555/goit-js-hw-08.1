//  Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let items = {};

formRef.addEventListener('submit', formSubmit);
formRef.addEventListener('input', throttle(textAreaInput, 500));
populateForm();

function textAreaInput(event) {
  items[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formSubmit(event) {
  event.preventDefault();
  if (formRef.email.value === '' || formRef.message.value === '') {
    alert('All fields are required!');
  } else {
    console.log(items);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    items = {};
  }
}

function populateForm() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

  for (const key in savedInfo) {
    if (key) {
      formRef[key].value = savedInfo[key];
      items = savedInfo;
    }
  }
}
