import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemInterface } from '@site-types';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() ToDoItem! : ToDoItemInterface;
  ViewToggle         : boolean = false;

  constructor(private service: AppService) { }

  public toggleView(state: boolean): void { this.ViewToggle = state; }

  public deleteItem(): void{ this.service.removeTodo(this.ToDoItem.id); }

}
