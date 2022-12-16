import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFilterModule } from './components/todo-filter/todo-filter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
