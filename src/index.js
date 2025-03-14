document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskDescription = event.target.elements['new-task-description'].value;
    const newTask = document.createElement('li');
    newTask.textContent = newTaskDescription;
    taskList.appendChild(newTask);
    form.reset();
  });
});
