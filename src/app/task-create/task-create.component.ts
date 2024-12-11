import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-create',
  standalone: true,
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class TaskCreateComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignee: ['', Validators.required],
      type: ['task', Validators.required],
      priority: ['medium', Validators.required],
      status: ['new', Validators.required],
      creator: ['', Validators.required],
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      alert('Задача создана!');
      this.taskForm.reset();
    }
  }
}
