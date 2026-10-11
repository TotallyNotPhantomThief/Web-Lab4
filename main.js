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
    const jsonString = JSON.stringify(rawtasks,null,2);
    const jsonParse = Json.parse(jsonString);

    jsonParse.tasks.forEach(task => {
        const taskDivsion = document.createElement('div');
        taskDivsion.classList.add('task');
        if(task.completed){
            taskDivison.classList.add('completed');
        }
    

    const taskTitle = document.createElement('span');
    taskTitle.textContent = task.title;

    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle";
    toggleButton.addEventListener('click',()=>{
        taskManager.toggleTask(task.id);
        renderTasks();
    });
   });

const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click',()=>{
    taskManager.removeTask(task.id);
    renderTasks();
  });

  taskDivison.appendChild(taskTitle);
  taskDivison.appendChild(toggleButton);
  taskDivison.appendChild(deleteButton);
  taskList.appendChild(taskDivison);
}