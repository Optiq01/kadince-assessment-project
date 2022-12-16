import { Component, Input } from '@angular/core';
import { TaskInterface } from '@site-types';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent{

  @Input() Description! : string;
  @Input() Tasks!       : TaskInterface[];

}
