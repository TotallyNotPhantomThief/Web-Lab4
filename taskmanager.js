 export class Task{

    constructor(id,title,completed,completedState= false){
this.title = title;
this.completed = completed;
this.updateCompletedState(completedState);

Object.defineProperty(this,'id',{
value: id,
writable: false,
configurable: false,
enumerable: true});

}
updateCompletedState(state){
    this.completed.classlist.toggle('completed',state);
}
toggle(){
    this.completed.classlist.toggle('completed');
}

}
export class TaskManager{
constructor(){
    this.tasks = [];
}

setTasks(tasks){
 this.tasks = [...tasks];
}
addTask(task){
this.tasks =[...this.tasks,task];
}
removeTask(taskId){
this.tasks = this.tasks.filter(task => task.id !== taskId);
}
toggleTask(taskId){


}




}