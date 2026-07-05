"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.get("/", taskController_1.getTasks);
router.post("/", taskController_1.postTask);
router.put("/:id", taskController_1.putTask);
router.delete("/:id", taskController_1.deleteTask);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map