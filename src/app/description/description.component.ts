import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';

interface Task {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule,TodoComponent],
  templateUrl: './description.component.html',
  styleUrls: ['../description/description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  taskId: number | null = null;
  task: Task | undefined;

  tasks: Task[] = [
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
      this.task = this.tasks.find(t => t.id === this.taskId);
    });
  }
}
