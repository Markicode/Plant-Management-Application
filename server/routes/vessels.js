import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM vessels");
    res.send(JSON.stringify(result.rows));
});

router.post("/addvessel", async(req, res) => {
    const {vesselName, maxContent, location} = req.body;
    const result = await db.query("INSERT INTO vessels (name, max_content, location) VALUES ($1, $2, $3) RETURNING *", [vesselName, maxContent, location]);
    res.send(JSON.stringify(result.rows));
});

export default router;