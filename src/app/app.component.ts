import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { RouterModule } from '@angular/router';
import { DeskComponent } from './desk/desk.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: 'desk', component: DeskComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Добавляем RouterModule в imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'digital-department-application';
}
