import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterType } from '@site-types';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent {

  @Input() Filter!      : string;
  @Output()ChangeFilter : EventEmitter<FilterType> = new EventEmitter();


  public updateFilter(filter: FilterType){ this.ChangeFilter.emit(filter); }

}
