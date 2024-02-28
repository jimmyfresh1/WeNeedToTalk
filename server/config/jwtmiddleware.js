import { verifyUser } from "../controllers/user.controller";

app.get('/', verifyUser, (req, res) => {
    return res.json("Success")
})