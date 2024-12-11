import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DeskComponent } from './desk/desk.component';

export const routes: Routes = [
	{ path: '', component: TaskListComponent },
	{ path: 'create', component: TaskCreateComponent },
	{ path: 'desk', component: DeskComponent },
	{ path: 'edit/:id', component: TaskEditComponent },
];