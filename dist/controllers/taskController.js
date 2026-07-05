"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.putTask = exports.postTask = exports.getTasks = void 0;
// Service呼び出し
const taskService_1 = require("../services/taskService");
const getTasks = async (req, res) => {
    const tasks = await (0, taskService_1.fetchTasks)();
    res.json(tasks); // JavaScriptのデータをJSON形式にしてブラウザへ返す
};
exports.getTasks = getTasks;
const postTask = async (req, res) => {
    // 確認用
    console.log("req.body:", req.body);
    // req.body: クライアントが送ってきたデータ
    // タスク情報であるtitleとcompletedを取り出し、Serviceに渡す
    const { title, description, deadline, estimatedHours, priority } = req.body;
    const newTask = await (0, taskService_1.createTask)(title, description, deadline, estimatedHours, priority);
    // 201: 新しく作成した
    // というHTTPのステータスコードを返す
    res.status(201).json(newTask);
};
exports.postTask = postTask;
const putTask = async (req, res) => {
    // URLからIDを取得 & 文字列から数値に変換
    const id = Number(req.params.id);
    // 更新内容をまとめる
    const updatedTask = {
        id,
        ...req.body,
        createdAt: req.body.createdAt,
    };
    // Serviceに更新内容を渡す
    const result = await (0, taskService_1.updateTaskService)(id, updatedTask);
    // 更新出来なかった場合は404を返す
    if (!result) {
        return res.status(404).json({
            message: "Task not found",
        });
    }
    // 更新出来た場合は更新後のTaskを返す
    res.json(result);
};
exports.putTask = putTask;
const deleteTask = async (req, res) => {
    // URLからIDを取得 & 文字列から数値に変換
    const id = Number(req.params.id);
    // Serviceに削除するIDを渡す
    const deleted = await (0, taskService_1.deleteTaskService)(id);
    // 削除出来なかった場合は404を返す
    if (!deleted) {
        return res.status(404).json({
            message: "Task not found",
        });
    }
    // 削除出来た場合は204(成功、返すデータなし)を返す
    res.status(204).send();
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskController.js.map