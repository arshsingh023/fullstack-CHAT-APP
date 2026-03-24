import express from "express";
import { protectRoute } from "../middleware/authmiddleware.js";
import { getMessages, getUSersForSidebar, sendMessage } from "../controller/messagecontroller.js";

const router = express.Router();

router.get("/users", protectRoute, getUSersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;