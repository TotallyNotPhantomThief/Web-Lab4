import { TaskManager,Task } from "./taskmanager";
import{ fetchTasks} from "./api";
const taskManager = new TaskManager();
const loadBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMesssage = document.getElementById("statusMessage");

loadBtn.addEventListener("click",async ()=> {
    statusMesssage.textContent = "Loading tasks...";
    try{
        const tasksIn = await fetchTasks();
        const rawTasks = tasksIn.map(task => new Task(task.id,task.title,task.completed));
        taskManager.setTasks(rawTasks);
        renderTasks();
        statusmessage.textContent = '';
    } catch(error){
        statusMesssage.textContent = "Error loading tasks";
    }


  }  

)

function renderTasks(){
    taskList.innerHTML = '';
    taskManager.tasks.forEach(task => {
        const taskDivsion = document.createElement('div');
        taskDivison.classList.add('task');
        if(task.completed){
            taskDivison.classList.add('completed');
        }
    })












}