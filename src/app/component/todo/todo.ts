
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  newTask: string = '';

  tasks: Task[] = [];

  get completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get remainingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        title: this.newTask.trim(),
        completed: false
      });

      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed =
      !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
