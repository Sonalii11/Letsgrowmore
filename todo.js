const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-container");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = toggleTask;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask(event) {
  const taskItem = event.target;
  taskItem.classList.toggle("completed");
}