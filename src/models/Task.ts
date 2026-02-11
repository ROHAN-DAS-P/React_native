export type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    deadline: Date;
    priority: Priority;
    completed: boolean;
}
