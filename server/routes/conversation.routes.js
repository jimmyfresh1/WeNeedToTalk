import { Router } from "express";
const router3 = Router();
import { getTsundereConvos } from "../controllers/conversation.controller";
router.route("/tsundereconversations").get(getTsundereConvos);
export default router;
