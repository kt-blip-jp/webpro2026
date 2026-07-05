"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database");
const express_1 = __importDefault(require("express"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/tasks", taskRoutes_1.default);
// ブラウザから "/" にアクセスされたときの処理
app.get("/", (req, res) => {
    res.send("タスク管理アプリのバックエンドです！");
});
// サーバを起動
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map