import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM users");
    res.send(JSON.stringify(result.rows));
});

export default router;