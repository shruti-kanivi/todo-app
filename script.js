const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
     const li = document.createElement("li");
    const taskSpan = document.createElement("span");
taskSpan.textContent = taskText;
li.appendChild(taskSpan);


     const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";


    console.log(taskText);
});
