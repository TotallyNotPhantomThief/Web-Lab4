class Task{

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
class TaskManager{







    
}