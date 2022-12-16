import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskItemModule } from './task-item/task-item.module';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskItemModule
  ],
  exports: [
    TaskListComponent
  ],
  bootstrap: [TaskListComponent]
})
export class TaskListModule { }
