import { Router } from "express";
const router3 = Router();
import {
  getTsundereConvos,
  getSingleTsundereConvo,
  createConvo,
} from "../controllers/conversation.controller.js";
router3
  .route("/tsundereconversations")
  .get(getTsundereConvos)
  .post(createConvo);
router3.route("/tsundereconversations/:id").get(getSingleTsundereConvo);

export default router3;
