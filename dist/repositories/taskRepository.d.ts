import { Task } from "../models/Task";
export declare const getAllTasks: () => Promise<any[]>;
export declare const addTask: (title: string, description: string, deadline: string, estimatedHours: number, priority: number) => Promise<any>;
export declare const updateTask: (id: number, updatedTask: Task) => Promise<any>;
export declare const deleteTask: (id: number) => Promise<boolean>;
//# sourceMappingURL=taskRepository.d.ts.map