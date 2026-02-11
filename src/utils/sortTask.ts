import { Task } from '../models/Task';

/**
 * Sort tasks by:
 * 1. Incomplete first
 * 2. Priority (high > medium > low)
 * 3. Earliest deadline
 */
export const sortTasks = (tasks: Task[]): Task[] => {
    const priorityWeight = {
        high: 3,
        medium: 2,
        low: 1,
    };

    return [...tasks].sort((a, b) => {
        if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
        }

        if (priorityWeight[a.priority] !== priorityWeight[b.priority]) {
        return priorityWeight[b.priority] - priorityWeight[a.priority];
        }

        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
};
