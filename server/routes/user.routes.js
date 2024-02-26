import { Router } from "express";
const router = Router();
import { createUser, findUser } from "../controllers/user.controller.js";

router.route("/create")
    .post(createUser);

router.route("/login")
    .post(findUser)

export default router