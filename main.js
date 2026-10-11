import { TaskManager,Task } from "./taskmanager.js";
import{ fetchTasks} from "./api.js";
const taskManager = new TaskManager();
const loadBtn = document.getElementById("loadTaskBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

loadBtn.addEventListener("click",async ()=> {
    statusMessage.textContent = "Loading tasks...";
    try{
        const tasksIn = await fetchTasks();
        const rawTasks = tasksIn.map(task => new Task(task.id,task.title,task.completed));
        taskManager.setTasks(rawTasks);
        renderTasks();
        statusMessage.textContent = '';
    } catch(error){
        statusMessage.textContent = "Error loading tasks";
    }
  }  
)
function renderTasks(){
    taskList.innerHTML = '';
    const jsonString = JSON.stringify(taskManager.tasks,null,2);
    const jsonParse = JSON.parse(jsonString);

    jsonParse.forEach(task => {
        const taskDivsion = document.createElement('div');
        taskDivsion.classList.add('task');
        if(task.completed){
            taskDivsion.classList.add('completed');
        }
    

    const taskTitle = document.createElement('span');
    taskTitle.textContent = task.title;

    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle";
    toggleButton.addEventListener('click',()=>{
        taskManager.toggleTask(task.id);
        renderTasks();
    });
   

const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click',()=>{
    taskManager.removeTask(task.id);
    renderTasks();
  });
  

  taskDivsion.appendChild(taskTitle);
  taskDivsion.appendChild(toggleButton);
  taskDivsion.appendChild(deleteButton);
  taskList.appendChild(taskDivsion);
    });
}