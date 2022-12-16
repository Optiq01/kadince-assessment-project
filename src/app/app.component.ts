import { Component, OnInit } from '@angular/core';
import { ToDoItemInterface } from '@site-types';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  $TodoListObservable: ToDoItemInterface[] = [];
  
  constructor(private dataService: AppService){}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe(a=>{ this.$TodoListObservable = a; });
  }
}
