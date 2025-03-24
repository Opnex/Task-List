//Selection of HTML Element
const taskInput = document.querySelector(".task-input")
const categorySelect = document.querySelector(".categorySelect")
const taskList = document.querySelector(".task-list")

//An empty array to store all the tasks
let tasks = [];

//A function to add a new task
function addTask(){
    const description = taskInput.value.trim();

    if (description === ""){
        alert("eneter a task")
        return
    }

    const newTask = {
        description: description,
        category: categorySelect.value,
        dateAdded: new Date(),
        completed: false,
    }

    tasks.push(newTask)
    taskInput.value = ""
    displayTask()
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed
    displayTask()
}

function displayTask(){
    taskList.innerHTML = "";
    

    tasks.forEach( function(task,index) {
        const li = document.createElement("li")
        li.className = `task-items ${task.category} ${task.completed ? "completed" : ""}`
        
        
        const dateString = task.dateAdded.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        
        
        li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} onChange="toggleTask(${index})">
        <span>${task.description.toUpperCase()} (${task.category}) - ${dateString}</span>`

        taskList.appendChild(li)
        })
}

console.log(tasks);


