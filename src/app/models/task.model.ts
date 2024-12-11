export interface Task {
	id: number;
	type: 'bug' | 'task';
	priority: 'critical' | 'high' | 'medium' | 'low';
	status: string;
	title: string;
	description: string;
	assignee: string;
	creator: string;
	createdAt: Date;
	updatedAt: Date;
}