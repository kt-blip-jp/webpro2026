import { Task } from "../models/Task";
export declare const fetchTasks: () => Promise<any[]>;
export declare const createTask: (title: string, description: string, deadline: string, estimatedHours: number, priority: number) => Promise<any>;
export declare const updateTaskService: (id: number, updatedTask: Task) => Promise<any>;
export declare const deleteTaskService: (id: number) => Promise<boolean>;
//# sourceMappingURL=taskService.d.ts.map