document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    if (task === "") {
        alert("กรุณากรอกข้อความ!");
        return;
    }

    // ดึงรายการเก่า + เพิ่มรายการใหม่
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    loadTasks();
}

function loadTasks() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        // ปุ่มลบ
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "ลบ";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
