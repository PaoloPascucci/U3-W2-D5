import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoList!: Todo[];
  newTodoTitle: string = '';
  loading = true;  

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }
  addTodo() {
    const newTodo: Todo = {
      id: this.todoList.length + 1,
      title: this.newTodoTitle,
      completed: false,
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.loadTodos();
      this.newTodoTitle = '';
    });
  }
  markAsCompletedClicked(todo: Todo) {
    this.todoService.markAsCompleted(todo).subscribe(() => {
      this.loadTodos();
    });
  }
  
  private loadTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todoList = todos;
      this.loading = false;
    });
  }
}
