import "./config/database";
import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tasks", taskRoutes);

// ブラウザから "/" にアクセスされたときの処理
app.get("/", (req, res) => {
  res.send("タスク管理アプリのバックエンドです！");
});

// サーバを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});