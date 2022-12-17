import { Injectable } from '@angular/core';
import { ToDoItemInterface } from '@site-types';
import {BehaviorSubject, Observable} from 'rxjs';
import { TODO_DATA } from 'src/assets/dummyData';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private TodoData     : BehaviorSubject<ToDoItemInterface[]> = new BehaviorSubject([...TODO_DATA]);
  private ToDoObserver : Observable<ToDoItemInterface[]>      = this.TodoData.asObservable();

  public getTodos() : Observable<ToDoItemInterface[]> { return this.ToDoObserver; }

  public addTodo(item: ToDoItemInterface): void {
    this.TodoData.next([...this.TodoData.value, item]);
  }

  constructor() { }
}
