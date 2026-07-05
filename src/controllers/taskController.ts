// Request: ブラウザから送られてきた情報, Response: ブラウザに返す情報
import { Request, Response } from "express";
// Service呼び出し
import { fetchTasks, createTask, updateTaskService, deleteTaskService } from "../services/taskService";

export const getTasks = async(req: Request, res: Response) => {
  const tasks = await fetchTasks();
  res.json(tasks); // JavaScriptのデータをJSON形式にしてブラウザへ返す
};

export const postTask = async(req: Request, res: Response) => {
  // 確認用
  console.log("req.body:", req.body);

  // req.body: クライアントが送ってきたデータ
  // タスク情報であるtitleとcompletedを取り出し、Serviceに渡す
  const { title, description, deadline, estimatedHours, priority } = req.body;

  const newTask = await createTask(title, description, deadline, estimatedHours, priority);
  // 201: 新しく作成した
  // というHTTPのステータスコードを返す
  res.status(201).json(newTask);
};

export const putTask = async(req: Request, res: Response) => {
  // URLからIDを取得 & 文字列から数値に変換
  const id = Number(req.params.id);

  // 更新内容をまとめる
  const updatedTask = {
    id,
    ...req.body,
    createdAt: req.body.createdAt,
  };
  
  // Serviceに更新内容を渡す
  const result = await updateTaskService(id, updatedTask);

  // 更新出来なかった場合は404を返す
  if (!result) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  // 更新出来た場合は更新後のTaskを返す
  res.json(result);
};

export const deleteTask = async(req: Request, res: Response) => {
  // URLからIDを取得 & 文字列から数値に変換
  const id = Number(req.params.id);

  // Serviceに削除するIDを渡す
  const deleted = await deleteTaskService(id);

  // 削除出来なかった場合は404を返す
  if (!deleted) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  // 削除出来た場合は204(成功、返すデータなし)を返す
  res.status(204).send();
};