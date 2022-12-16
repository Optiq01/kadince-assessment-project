import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFilterComponent } from './todo-filter.component';



@NgModule({
  declarations: [
    TodoFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoFilterComponent
  ],
  bootstrap: [TodoFilterComponent]
})
export class TodoFilterModule { }
