import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
