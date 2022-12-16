import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from './todo-detail.component';



@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoDetailComponent
  ],
  bootstrap: [TodoDetailComponent]
})
export class TodoDetailModule { }
