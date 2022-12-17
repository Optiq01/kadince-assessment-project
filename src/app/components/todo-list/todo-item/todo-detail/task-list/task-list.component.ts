import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{

  @Input() Tasks!          : TaskInterface[];
  @Output() UpdateTaskList : EventEmitter<TaskInterface[]> = new EventEmitter();

  public updateTaskStatus(item: TaskInterface): void {
    const itemIndex  = this.Tasks.findIndex(a=> a.id === item.id);
    const editedList = this.Tasks.filter(a=> a.id !== item.id);
    
    editedList.splice(itemIndex, 0, item);
    this.UpdateTaskList.emit(editedList);
  }

}
