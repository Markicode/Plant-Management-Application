import express from "express";
import db from "../db.js";
import passport from "passport";

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM users");
    res.send(JSON.stringify(result.rows));
});

router.get("/me", (req, res) => {
    console.log("Received cookies:", req.headers.cookie);
console.log("Session:", req.session);
console.log("req.user:", req.user);
    if(req.isAuthenticated())
    {
        res.json({ user: req.user });
        console.log("/me succes")
    }
        else {
            res.status(401).json({ error: "Not logged in" });
            console.log("/me fail");
        }
    
})

router.post("/logout", (req, res) => {
    req.logout(() => res.json({message: "Logged out"}));
});

router.post( "/login", (req, res, next) => 
{
    passport.authenticate("local", (err, user, info) => {
    if(err) return next(err);
    if(!user) return res.status(401).json({ error: info?.message || "invalid credentials"});

    req.login(user, (err) => {
        if(err) return next(err);
        console.log("req.user direct na login:", req.user);
        return res.json({user: req.user});
    });
    })(req, res, next);
});




export default router;