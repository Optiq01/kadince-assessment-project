import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from './todo-detail.component';
import { TaskListModule } from './task-list/task-list.module';



@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TaskListModule
  ],
  exports: [
    TodoDetailComponent
  ],
  bootstrap: [TodoDetailComponent]
})
export class TodoDetailModule { }
