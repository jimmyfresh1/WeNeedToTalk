import jwt from 'jsonwebtoken'

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false })
        } else {
            req.user = payload
            req.auth = payload
            next()
        }
    })
}

module.exports.createJWT = (req, res) => {
    const { _id, login } = req.auth;

    const token = jwt.sign({ _id, login }, process.env.JWT_SECRET);

    return res.cookie("UserToken", token, { httpOnly: true }).json(req.auth)
}