import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  filters = {
    assignee: '',
    priority: '',
    type: '',
  };

  statuses = ['New', 'In progress', 'Resolved', 'Testing', 'Done'];

  ngOnInit(): void { }

  filterTasks(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks(this.filters);
  }

  applyFilters() {
    this.loadTasks();
  }
}



