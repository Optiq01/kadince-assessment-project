import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFilterModule } from './components/todo-filter/todo-filter.module';
import { TodoListModule } from './components/todo-list/todo-list.module';
import { CreateTodoModule } from './components/create-todo/create-todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoFilterModule,
    TodoListModule,
    CreateTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
