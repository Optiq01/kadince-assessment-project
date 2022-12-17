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
  ItemToEdit!         : ToDoItemInterface | undefined;

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
    document.body.style.overflow = 'hidden';
  }

  public closeNewTodo(): void{
    this.AddToDoToggle = false;
    this.ItemToEdit= undefined;
    document.body.style.overflow = 'scroll';
  }

  public setToDoEditor(item: ToDoItemInterface): void{
    this.ItemToEdit = item;
    this.AddToDoToggle = true;
    document.body.style.overflow = 'hidden';
  }
}
