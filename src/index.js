import './styles/style.css';
const tasks = [
  {
    description: 'Read book',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to Home',
    completed: false,
    index: 2,
  },
  {
    description: 'Make dinner',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleep Well',
    completed: false,
    index: 4,
  },
];
tasks.forEach((list) => {
  const taskList = document.querySelector('.task-list');
  const newTask = document.createElement('div');
  newTask.classList.add('new-task');
  newTask.innerHTML = `<input type='checkbox' id='${list.index}' />
      <div>
      <p contenteditable='true'>${list.description}</p>
      </div>
      <div>
      <ion-icon name='ellipsis-vertical-outline'></ion-icon>
      </div>
      `;
  taskList.appendChild(newTask);
});
