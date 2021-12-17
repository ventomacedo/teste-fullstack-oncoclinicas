
require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authorization = req.headers["authorization"].split(' ');
    const bearer        = authorization[1];
    const secretKey     = process.env.JWT_SECRET_TOKEN;

    jwt.verify(bearer, secretKey, (error, userInfo) => {
        if(error)
            return res.status(403).send({ message: "Not Authorized" });

        req.userInfo = userInfo;
        next();
    });
};