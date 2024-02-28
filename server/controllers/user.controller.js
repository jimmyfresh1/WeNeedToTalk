import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

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
                const token = jwt.sign({ login: user.login }, "jwt-secret-key", { expiresIn: "1d" })
                res.cookie("token", token)
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

async function verifyUser(req, res, next) {
    const token = req.cookies.token
    console.log(token)
    if (!token) {
        return res.json("The token not available")
    } else {
        jwt.verify(token, "jwt=secret-key", (err, decoded) => {
            if (err) return res.json("Token is wrong")
            next()
        })
    }
}

export {
    createUser,
    findUser,
    verifyUser
};