import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent{

  @Input() Description!   : string;
  @Input() Tasks!         : TaskInterface[];
  @Output() ToggleSummary : EventEmitter<boolean>         = new EventEmitter();
  @Output() UpdateDetails : EventEmitter<TaskInterface[]> = new EventEmitter();
  @Output() ScrollToPlace : EventEmitter<null> = new EventEmitter();

  ButtonText   : string = 'back';
  TaskUpdates! : TaskInterface[];

  public toggleSummary(): void {
    if(this.TaskUpdates !== undefined){
      this.UpdateDetails.emit(this.TaskUpdates);
    }
    this.ScrollToPlace.emit();
    this.ToggleSummary.emit(false);
  }

  public updateDetails(items: TaskInterface[]): void {
    this.TaskUpdates = items;
    this.ButtonText  = 'save';
  }

}
