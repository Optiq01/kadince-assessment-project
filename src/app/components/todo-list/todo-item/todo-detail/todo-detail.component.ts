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
  @Output() ToggleSummary : EventEmitter<boolean> = new EventEmitter();

  public toggleSummary(): void { this.ToggleSummary.emit(false); }

}
