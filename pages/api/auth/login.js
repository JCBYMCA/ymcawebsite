import executeQuery from "../../../lib/db";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export default async function login(req, res) {
    const {username, password} = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    const values = [username, password];
    const results = await executeQuery({query, values});
    if (results.error) {
        res.status(500).json({message: results.error});
    }
    else if (results.length === 0) {
        res.status(401).json({message: "Invalid credentials"});
    }
    else {
        const user = results[0];
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        res.status(200).json({token});
    }
}