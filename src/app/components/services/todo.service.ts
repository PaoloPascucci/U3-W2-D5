import { Injectable } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: Todo[] = [];
  private completedList: Todo[] = [];

  constructor() {}

  addTodo(newTodo: Todo): Observable<void> {
    return of(null).pipe(
      delay(1500),
      map(() => {
        this.todoList.push(newTodo);
      })
    );
  }

  markAsCompleted(todo: Todo): Observable<void> {
    return of(null).pipe(
      delay(1500),
      map(() => {
        todo.completed = true;
        this.completedList.push(todo);
        this.todoList = this.todoList.filter((item) => item.id !== todo.id);
      })
    );
  }

  getTodos(): Observable<Todo[]> {
    return timer(1500).pipe(
      map(() => this.todoList),
      delay(1500)
    );
  }

  getCompletedTodos(): Observable<Todo[]> {
    return timer(1500).pipe(
      map(() => this.completedList),
      delay(1500)
    );
  }
}
