// Repositoryからタスク一覧とaddTask, updateTask, deleteTaskを取得する関数を用いる
import { getAllTasks, addTask, updateTask, deleteTask} from "../repositories/taskRepository";
import { Task } from "../models/Task";

export const fetchTasks = async () => {
  // Service自身はデータを持たないので、Repositoryからタスク一覧を取得して返す
  return await getAllTasks();
};

export const createTask = async(title: string, description: string, deadline: string, estimatedHours: number, priority: number) => {
  return await addTask(title, description, deadline, estimatedHours, priority);
};

export const updateTaskService = async(id: number, updatedTask: Task) => {
  return await updateTask(id, updatedTask);
};

export const deleteTaskService = async(id: number) => {
  return await deleteTask(id);
};