import { Router } from "express"
import AuthController from "../controllers/AuthController.js"
import authMiddleware from "../middlewares/AuthMiddleware.js"
import ChatGroupController from "../controllers/ChatGroupController.js"
import ChatGroupUserController from "../controllers/ChatGroupUserController.js"
const router = Router()

router.post("/auth/login",AuthController.login)



router.get("/chat-group",authMiddleware,ChatGroupController.index);
router.get("/chat-group/:id",authMiddleware,ChatGroupController.show);
router.post("/chat-group",ChatGroupController.store);
router.put("/chat-group/:id",authMiddleware,ChatGroupController.update);
router.delete("/chat-group/:id",authMiddleware,ChatGroupController.destroy);



router.get("/chat-group-users/:id",ChatGroupUserController.index);
router.post("/chat-group-users",ChatGroupUserController.store);

export default router;