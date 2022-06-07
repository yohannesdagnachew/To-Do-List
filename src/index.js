import './styles/style.css';
import Alltask from './js/add.js';
import { real, displayUI, newTask } from './js/reload.js';
import { read, addButton } from './js/addtask.js';

let tasks = [];
addButton.addEventListener('click', (e) => {
  tasks = JSON.parse(localStorage.getItem('list')) || [];
  e.preventDefault();
  const findIndex = tasks.length;
  const task1 = new Alltask(read.value, false, findIndex + 1);
  tasks.push(task1);
  real(task1);
  read.value = '';
  localStorage.setItem('list', JSON.stringify(tasks));
});

newTask.addEventListener('click', (e) => {
  tasks = JSON.parse(localStorage.getItem('list')) || [];

  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
    const k = parseInt(e.target.id, 10);
    const newArray = tasks.filter((Objects) => Objects.index !== k);
    for (let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = 1;
      newArray[i].index += i;
    }
    localStorage.setItem('list', JSON.stringify(newArray));
    window.location.reload();
  } else if (e.target.checked) {
    const k = parseInt(e.target.id, 10);
    tasks[k - 1].completed = true;
    localStorage.setItem('list', JSON.stringify(tasks));
  } else {
    const k = parseInt(e.target.id, 10);
    tasks[k - 1].completed = false;
    localStorage.setItem('list', JSON.stringify(tasks));
  }
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
  tasks = JSON.parse(localStorage.getItem('list')) || [];

  if (e.target.classList.contains('new-task-pro')) {
    e.target.parentElement.parentElement.remove();
  }

  const clearArrray = tasks.filter((Objects) => Objects.completed !== true);

  for (let i = 0; i < clearArrray.length; i += 1) {
    clearArrray[i].index = 1;
    clearArrray[i].index += i;
  }
  localStorage.setItem('list', JSON.stringify(clearArrray));
  window.location.reload();
});

displayUI();
