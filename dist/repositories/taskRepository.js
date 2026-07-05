"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getAllTasks = void 0;
// SQLを使うための設定を読み込む
const database_1 = require("../config/database");
// タスク一覧を返す関数
const getAllTasks = async () => {
    // SQLを実行し、全件取得の後、配列としてresult.rowsを返す
    const result = await database_1.pool.query("SELECT * FROM tasks ORDER BY id");
    return result.rows;
};
exports.getAllTasks = getAllTasks;
const addTask = async (title, description, deadline, estimatedHours, priority) => {
    const result = await database_1.pool.query(
    // INSERT INTO tasks: tasksテーブルに追加するSQL文 
    // VALUES: $1 → title, $2 → description, $3 → deadline, $4 → estimatedHours, $5 → priorityと対応付けている。
    `
    INSERT INTO tasks
    (title, description, deadline, estimated_hours, priority, completed)
    
    VALUES
    ($1, $2, $3, $4, $5, false)

    RETURNING *;
    `, [
        title,
        description,
        deadline,
        estimatedHours,
        priority
    ]);
    return result.rows[0];
};
exports.addTask = addTask;
// タスクを更新する関数（更新出来たらTask、出来なかったらnull）
const updateTask = async (id, updatedTask) => {
    // 更新したいタスクを探す
    const result = await database_1.pool.query(
    // tasksテーブルを更新するSQL文
    // 更新する列を指定する
    // 指定したIDのタスクのみ更新する
    // 更新後のデータを返す
    `
    UPDATE tasks
    SET
      title = $1,
      description = $2,
      deadline = $3,
      estimated_hours = $4,
      actual_hours = $5,
      priority = $6,
      completed = $7
    WHERE id = $8
    RETURNING *;
    `, [
        updatedTask.title,
        updatedTask.description,
        updatedTask.deadline,
        updatedTask.estimatedHours,
        updatedTask.actualHours,
        updatedTask.priority,
        updatedTask.completed,
        id
    ]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
};
exports.updateTask = updateTask;
// タスクを削除する関数
const deleteTask = async (id) => {
    const result = await database_1.pool.query(
    // tasksテーブルから指定したIDのタスクを削除するSQL文
    // 指定したIDのタスクのみ削除する
    `
    DELETE FROM tasks
    WHERE id = $1
    `, [id]);
    return (result.rowCount ?? 0) > 0;
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskRepository.js.map