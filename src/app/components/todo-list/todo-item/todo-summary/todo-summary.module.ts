import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoSummaryComponent } from './todo-summary.component';



@NgModule({
  declarations: [
    TodoSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoSummaryComponent
  ]
})
export class TodoSummaryModule { }
