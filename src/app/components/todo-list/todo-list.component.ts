import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItemInterface } from '@site-types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() TodoList : ToDoItemInterface[] = [];
  @Output() AddTodo : EventEmitter<null>  = new EventEmitter();

  public addTodo():void{ this.AddTodo.emit(); }

}
