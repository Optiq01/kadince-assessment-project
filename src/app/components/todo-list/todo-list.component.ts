import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItemInterface } from '@site-types';
import { deleteTodoAnimation } from 'src/assets/animations';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [ deleteTodoAnimation ]
})
export class TodoListComponent {

  @Input() TodoList  : ToDoItemInterface[]             = [];
  @Output() AddTodo  : EventEmitter<null>              = new EventEmitter();
  @Output() EditToDo : EventEmitter<ToDoItemInterface> = new EventEmitter<ToDoItemInterface>();

  public addTodo():void{ this.AddTodo.emit(); }

  public editToDoItem(item: ToDoItemInterface): void{ this.EditToDo.emit(item); }

}
