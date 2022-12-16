import { Component, Input } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{

  @Input() Tasks!: TaskInterface[];

}
