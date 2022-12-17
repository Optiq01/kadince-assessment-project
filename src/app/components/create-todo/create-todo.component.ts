import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { TaskInterface, ToDoItemInterface } from '@site-types';
import { AppService } from 'src/app/app.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Output() ToggleOff : EventEmitter<null> = new EventEmitter<null>();
  @Input() EditorData : ToDoItemInterface | undefined;

  ToDoForm! : FormGroup;

  get TaskList(){ return this.ToDoForm.get('tasks') as FormArray; }

  
  constructor(private service: AppService) { }

  ngOnInit(): void { this.createForm(); }

private createNewTask(): FormGroup{
    return new FormGroup({
      id     : new FormControl<string>(uuid()),
      task   : new FormControl<string>(''),
      status : new FormControl<string>('pending')
    });
  }
  
  public addTask():void{ this.TaskList.push(this.createNewTask()); }

  private createForm(): void {
    const formData = new FormGroup({
      id: new FormControl<string>(this.EditorData ? this.EditorData.id : uuid()),
      title: new FormControl<string>(this.EditorData ? this.EditorData.title : ''),
      description: new FormControl<string>(this.EditorData ? this.EditorData.description : ''),
      tasks: new FormArray<FormGroup>([]),
      status: new FormControl<string>(this.EditorData ? this.EditorData.status : 'pending'),
      taskStatus: new FormGroup({
        totalTasks : new FormControl<number>(this.EditorData ? this.EditorData.taskStatus.totalTasks : 0),
        completedTasks: new FormControl<number>(this.EditorData ? this.EditorData.taskStatus.completedTasks : 0),
        pendingTasks: new FormControl<number>(this.EditorData ? this.EditorData.taskStatus.pendingTasks : 0)
      })
    });

    this.ToDoForm = formData;

    if(this.EditorData !== undefined){
      this.EditorData.tasks.forEach(a => {
        this.TaskList.push(new FormGroup({
          id: new FormControl<string>(a.id),
          task: new FormControl<string>(a.task),
          status: new FormControl<string>(a.status)
        }))
      });
    }
  }

  public processForm(){
    const formData = this.ToDoForm.value;

    const newItem: ToDoItemInterface = {
      id: formData.id,
      title: formData.title,
      description: formData.description,
      tasks: [],
      status: formData.status,
      taskStatus: {
        totalTasks: formData.tasks.length,
        completedTasks: 0,
        pendingTasks: formData.tasks.length
      }
    };

    formData.tasks.forEach((a: TaskInterface) => {
      newItem.tasks.push({
        id: a.id,
        task: a.task,
        status: a.status
      });

    });

    if(this.EditorData !== undefined){ this.service.updateTodo(newItem); }
    else{ this.service.addTodo(newItem); }
    this.ToggleOff.emit();
  }

  public cancelTodo():void{ this.ToggleOff.emit(); }

}
