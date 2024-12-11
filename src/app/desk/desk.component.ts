// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { Task } from '../models/task.model';
// import { TaskService } from '../services/task.service';

// @Component({
//   selector: 'app-desk',
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './desk.component.html',
//   styleUrl: './desk.component.css'
// })
// export class DeskComponent {

//   tasks: Task[] = [];

//   statuses = ['new', 'in progress', 'resolved', 'testing', 'done'];

//   filters = {
//     assignee: '',
//     priority: '',
//     type: '',
//   };
//   ngOnInit(): void { }

//   filterTasks(status: string): Task[] {
//     return this.tasks.filter(task => task.status === status);
//   }

//   constructor(private taskService: TaskService) {
//     this.loadTasks();
//   }

//   loadTasks() {
//     this.tasks = this.taskService.getTasks(this.filters);
//   }

//   applyFilters() {
//     this.loadTasks();
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';  // Импортируем DragDropModule

@Component({
  selector: 'app-desk',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DragDropModule],  // Добавляем DragDropModule
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent {
  tasks: Task[] = [];
  statuses = ['New', 'In progress', 'Resolved', 'Testing', 'Done'];
  filters = { assignee: '', priority: '', type: '' };

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  ngOnInit(): void { }

  filterTasks(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks(this.filters);
  }

  applyFilters() {
    this.loadTasks();
  }

  onDrop(event: CdkDragDrop<Task[]>, newStatus: string) {
    const movedTask = event.item.data;

    // Обновляем только статус задачи
    const updates = {
      status: newStatus
    };

    // Теперь вызываем updateTask с двумя аргументами
    this.taskService.updateTask(movedTask.id, updates);
    this.loadTasks();  // Загружаем обновленные задачи
  }
}

