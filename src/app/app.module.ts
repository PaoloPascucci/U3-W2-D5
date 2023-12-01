import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoService } from './components/services/todo.service';

const routes: Route[] = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'completati',
    component: CompletedComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletedComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
