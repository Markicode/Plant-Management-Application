import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await db.query(`SELECT vessels.id, vessels.name AS vessel_name, vessels.max_content, vessels.location, vessels.current_content, vessels.is_hf, products.name AS product_name
         FROM vessels JOIN products ON vessels.product_id = products.id`);
    res.send(JSON.stringify(result.rows));
});

router.post("/addvessel", async(req, res) => {
    const {vesselName, maxContent, location} = req.body;
    const result = await db.query(`INSERT INTO vessels (name, max_content, location, current_content, product_id, is_hf) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [vesselName, maxContent, location, 0, 1, false]);
    res.send(JSON.stringify(result.rows));
});

export default router;