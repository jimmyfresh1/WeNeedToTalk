import { Router } from "express";
const router = Router();
import { createUser, findUser } from "../controllers/user.controller.js";

router.route("/create")
    .post(createUser);

router.route("/login")
    .post(findUser)

router.post('/logout', (req, res) => {
    res.clearCookie("token")
    res.json({message: "Logout successfull"})
})

export default router