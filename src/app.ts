import "./config/database";
import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();

// RenderではPORT環境変数が設定される。
// ローカルでは3000番ポートを使う。
const PORT = process.env.PORT || 3000;

// JSON形式のリクエストを受け取れるようにする
app.use(express.json());

// タスク関連のルーティング
app.use("/tasks", taskRoutes);

// 動作確認用（任意）
app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});

// サーバを起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});