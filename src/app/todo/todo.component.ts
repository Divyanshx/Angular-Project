import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Task {
  id: number;
  name: string;
  description: string;  
}


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,NgFor,CommonModule,RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {
  newTask: string = '';
  tasks: Task[] = [];

  
  addTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        id: this.tasks.length + 1, 
        name: this.newTask.trim(),
        description: 'Sample description for ' + this.newTask.trim()  
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }
  

  
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
