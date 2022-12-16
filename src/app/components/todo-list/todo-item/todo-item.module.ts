import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { TodoSummaryModule } from './todo-summary/todo-summary.module';
import { TodoDetailModule } from './todo-detail/todo-detail.module';



@NgModule({
  declarations: [
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoSummaryModule,
    TodoDetailModule
  ],
  exports: [
    TodoItemComponent
  ],
  bootstrap: [TodoItemComponent]
})
export class TodoItemModule { }
