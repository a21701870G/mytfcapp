export class Task {
    public id?: any;
    public title?: string;
    public status?: string;

    constructor(task?: Task){
        this.id = task ? task.id : null;
        this.title = task ? task.title : null;
        this.status = task ? task.status : null;
    }
}
