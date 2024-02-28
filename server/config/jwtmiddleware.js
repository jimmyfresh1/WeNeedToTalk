import { verifyUser } from "../controllers/user.controller";
import User from '../models/user.model'

app.get('/', verifyUser, (req, res) => {
    User.find({ login: req.login})
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(err))
})

