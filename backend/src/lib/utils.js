import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn:"7d"
    });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days represented as MS
        httpOnly: true, //Guarantees access only by http request to prevent xss attacks
        sameSite: "strict", //to prevent csrf attack
        secure: process.env.NODE_ENV !== "development",
    });
    return token;
};


    