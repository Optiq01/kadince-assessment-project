import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent{

  @Input() Task!         : TaskInterface;
  @Output() UpdateStatus : EventEmitter<TaskInterface> = new EventEmitter();

  public completeTask(): void{
    this.Task.status = 'complete';
    this.updateStatus();
  }

  public reactivateTask(): void{
    this.Task.status = 'pending';
    this.updateStatus();
  }

  private updateStatus(): void{ this.UpdateStatus.emit(this.Task); }

}
