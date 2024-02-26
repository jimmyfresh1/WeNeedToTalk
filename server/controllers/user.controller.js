import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
// create new
async function createUser(req, res) {
    try {
        const { login, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ login, email, password: hashedPassword });
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function findUser(req, res) {
    try {
        const { login, password } = req.body
        const user = await User.findOne({ login: login });

        if (user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createUser,
    findUser
};