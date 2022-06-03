import './styles/style.css';
import Alltask from './add.js';

let tasks = [];
const localStorageArray = JSON.parse(localStorage.getItem('list')) || [];
const read = document.querySelector('#new-task-input');
const taskList = document.querySelector('.task-list');
const newTask = document.createElement('div');

const displayUI = () => {
  localStorageArray.forEach((list) => {
    newTask.classList.add('new-task');
    newTask.innerHTML += `<div class='new-task-pro'><input type='checkbox' id ='${list.index}' class='checkbox' name='checkbox'/>
        <div>
        <p class='edit'>${list.description}</p>
        </div>
        <div>
        <ion-icon name='ellipsis-vertical-outline' class='dot'></ion-icon>
        <ion-icon name='trash-outline'  class='remove' id ='${list.index}'></ion-icon>
        </div></div>
        `;
    taskList.append(newTask);
  });
};

const real = (list) => {
  newTask.classList.add('new-task');
  newTask.innerHTML += `<div class='new-task-pro'><input type='checkbox' id ='${list.index}' class='checkbox' name='checkbox'/>
      <div>
      <p class='edit' >${list.description}</p>
      </div>
      <div class='allicons'>
      <ion-icon name='ellipsis-vertical-outline' class='dot'></ion-icon> 
      <ion-icon name='trash-outline' class='remove' id ='${list.index}'></ion-icon>
      </div></div>
      `;
  taskList.append(newTask);
};

const addButton = document.querySelector('.add');
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
  const edit = document.querySelector('.edit');
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
    const k = parseInt(e.target.id, 10);
    const newArray = tasks.filter((Objects) => Objects.index !== k);

    for (let i = k - 1; i < newArray.length; i += 1) {
      newArray[i].index -= 1;
    }
    localStorage.setItem('list', JSON.stringify(newArray));
  } else if (e.target.checked) {
    const k = parseInt(e.target.id, 10);
    tasks[k - 1].completed = true;
    console.log(e.target.checked.id);
    localStorage.setItem('list', JSON.stringify(tasks));
  } else {
    const k = parseInt(e.target.id, 10);
    tasks[k - 1].completed = false;
    localStorage.setItem('list', JSON.stringify(tasks));
  }
});
displayUI();

const checkbox = document.querySelector('.checkbox');
const taskpro = document.querySelector('.new-task-pro');

const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
  tasks = JSON.parse(localStorage.getItem('list')) || [];

  const clearArrray = tasks.filter((Objects) => Objects.completed !== true);
  localStorage.setItem('list', JSON.stringify(clearArrray));
});
