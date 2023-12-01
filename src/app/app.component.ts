import { Component } from '@angular/core';
import { TodoService, Todo } from './components/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {
  todoList: Todo[] = [];
  completedList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  addTodo(newTodo: Todo) {
    this.todoService.addTodo(newTodo).subscribe(() => {
      this.loadTodos();
    });
  }

  markAsCompleted(todo: Todo) {
    this.todoService.markAsCompleted(todo).subscribe(() => {
      this.loadTodos();
    });
  }

  private loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todoList = todos;
    });

    this.todoService.getCompletedTodos().subscribe(completedTodos => {
      this.completedList = completedTodos;
    });
  }
}
