import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-create',
  standalone: true,
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class TaskEditComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      assignee: [''],
      type: [''],
      priority: [''],
      status: [''],
    });
    this.taskId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const task = this.taskService.getTasks({}).find(t => t.id === this.taskId);
    if (task) {
      this.taskForm.patchValue(task);
    }
  }

  saveTask() {
    if (this.taskForm.valid) {
      this.taskService.updateTask(this.taskId, this.taskForm.value);
      alert('Задача обновлена!');
    }
  }
}
