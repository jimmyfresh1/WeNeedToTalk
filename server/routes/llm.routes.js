import { Router } from "express";
import { fullCall } from "../controllers/llm.controller.js";
const router2 = Router();
router2.route("/full").post(fullCall);
export default router2;
