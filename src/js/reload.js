const taskList = document.querySelector('.task-list');
const localStorageArray = JSON.parse(localStorage.getItem('list')) || [];

export const newTask = document.createElement('div');
export const displayUI = () => {
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

export const real = (list) => {
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
