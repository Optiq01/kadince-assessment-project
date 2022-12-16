import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { TodoSummaryModule } from './todo-summary/todo-summary.module';



@NgModule({
  declarations: [
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoSummaryModule
  ],
  exports: [
    TodoItemComponent
  ]
})
export class TodoItemModule { }
