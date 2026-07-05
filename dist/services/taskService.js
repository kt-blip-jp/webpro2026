"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskService = exports.updateTaskService = exports.createTask = exports.fetchTasks = void 0;
// Repositoryからタスク一覧とaddTask, updateTask, deleteTaskを取得する関数を用いる
const taskRepository_1 = require("../repositories/taskRepository");
const fetchTasks = async () => {
    // Service自身はデータを持たないので、Repositoryからタスク一覧を取得して返す
    return await (0, taskRepository_1.getAllTasks)();
};
exports.fetchTasks = fetchTasks;
const createTask = async (title, description, deadline, estimatedHours, priority) => {
    return await (0, taskRepository_1.addTask)(title, description, deadline, estimatedHours, priority);
};
exports.createTask = createTask;
const updateTaskService = async (id, updatedTask) => {
    return await (0, taskRepository_1.updateTask)(id, updatedTask);
};
exports.updateTaskService = updateTaskService;
const deleteTaskService = async (id) => {
    return await (0, taskRepository_1.deleteTask)(id);
};
exports.deleteTaskService = deleteTaskService;
//# sourceMappingURL=taskService.js.map