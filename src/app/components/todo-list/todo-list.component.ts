import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemInterface } from '@site-types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() TodoList: ToDoItemInterface[] = [];

}
