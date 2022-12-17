import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInterface, ToDoItemInterface } from '@site-types';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() ToDoItem! : ToDoItemInterface;
  @Output() EditToDo : EventEmitter<ToDoItemInterface> = new EventEmitter<ToDoItemInterface>();

  ViewToggle : boolean = false;

  constructor(private service: AppService) { }

  public toggleView(state: boolean): void { this.ViewToggle = state; }

  public deleteItem(): void{ this.service.removeTodo(this.ToDoItem.id); }

  public editToDo(): void { this.EditToDo.emit(this.ToDoItem); }

  public updateItem(newTasks: TaskInterface[]): void{
    const todoStatus: number = newTasks.filter(a=> a.status === 'pending').length;
    const newItem: ToDoItemInterface = {
      ...this.ToDoItem,
      tasks: [...newTasks],
      status: (todoStatus > 0 ? 'pending' : 'complete'),
      taskStatus: {
        totalTasks: newTasks.length,
        completedTasks: newTasks.filter(a=> a.status === 'complete').length,
        pendingTasks: todoStatus
      }
    };

    this.service.updateTodo(newItem);
  }

}
