import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskStatusInterface, TaskType } from '@site-types';

@Component({
  selector: 'todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent{

  @Input() Title!        : string;
  @Input() Description!  : string;
  @Input() Status!       : TaskType;
  @Input() TaskStatus!   : TaskStatusInterface;
  @Output() ToggleDetail : EventEmitter<boolean> = new EventEmitter();
  @Output() DeleteItem   : EventEmitter<null>    = new EventEmitter();

  public toggleDetail(): void{ this.ToggleDetail.emit(true); }

  public deleteItem(): void{ this.DeleteItem.emit(); }

}
