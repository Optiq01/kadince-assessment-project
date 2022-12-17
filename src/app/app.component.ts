import { Component, OnInit } from '@angular/core';
import { FilterType, ToDoItemInterface } from '@site-types';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  $TodoListObservable : ToDoItemInterface[] = [];
  Filter              : FilterType          = 'all';
  AddToDoToggle       : boolean             = false;

  get ToDoList(){
    if(this.Filter === 'all'){ return this.$TodoListObservable; }
    else{ return this.$TodoListObservable.filter(a=> a.status === this.Filter); }
  }
  
  constructor(private dataService: AppService){}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe(a=>{ this.$TodoListObservable = a; });
  }

  public updateListType(type: FilterType):void{ this.Filter = type; }

  public createNewTodo(): void{
    this.AddToDoToggle = true;
  }

  public closeNewTodo(): void{ this.AddToDoToggle = false; }
}
