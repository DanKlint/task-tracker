import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(filters: Partial<{ assignee: string; priority: string; type: string }>) {
    return this.tasks.filter(task =>
      (!filters.assignee || task.assignee === filters.assignee) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.type || task.type === filters.type)
    ).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
    const newTask: Task = {
      ...task,
      id: this.nextId++,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(newTask);
  }

  // updateTask(id: number, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): void {
  //   const task = this.tasks.find(task => task.id === id);
  //   if (task) {
  //     Object.assign(task, updates, { updatedAt: new Date() });
  //   }
  // }

  updateTask(id: number, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
    }
  }

}
