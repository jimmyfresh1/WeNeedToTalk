import { Router } from "express";
const router3 = Router();
import { verifyUser } from "../controllers/user.controller.js";
import {
  getTsundereConvos,
  getSingleTsundereConvo,
  createConvo,
} from "../controllers/conversation.controller.js";
router3
  .route("/tsundereconversations")
  .get(verifyUser, getTsundereConvos)
  .post(verifyUser, createConvo);
router3.route("/tsundereconversations/:id").get(getSingleTsundereConvo);

export default router3;
