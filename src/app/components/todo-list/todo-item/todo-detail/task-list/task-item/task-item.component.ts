import { Component, Input } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent{

  @Input()Task!: TaskInterface;

}
