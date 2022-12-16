import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemInterface } from '@site-types';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() ToDoItem!: ToDoItemInterface;

  constructor() { }

}
