import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() ToggleOff: EventEmitter<null> = new EventEmitter<null>();

  ToDoForm : FormGroup = new FormGroup({
    id          : new FormControl<string>(''),
    title       : new FormControl<string>(''),
    description : new FormControl<string>(''),
    tasks       : new FormArray([]),
    status      : new FormControl<string>(''),
    taskStatus  : new FormGroup({
      totalTasks    : new FormControl<number>(0),
      completedTask : new FormControl<number>(0),
      pendingTasks  : new FormControl<number>(0)
    })
  });

  get TaskList(){ return this.ToDoForm.get('tasks') as FormArray; }



  private createNewTask(): FormGroup{
    return new FormGroup({
      id     : new FormControl<string>(uuid()),
      task   : new FormControl<string>(''),
      status : new FormControl<string>('pending')
    });
  }
  
  public addTask():void{ this.TaskList.push(this.createNewTask()); }

  constructor(private service: AppService) { }

  ngOnInit(): void {
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

    this.service.addTodo(newItem);
  }

  public cancelTodo():void{ this.ToggleOff.emit(); }

}
