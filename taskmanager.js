class Task{

    constructor(id,title,completed){
this.title = title;
Object.defineProperty(this,'id',{
value: id,
writable: false,
configurable: false,
enumerable: true});
this.completed = completed;

}

}