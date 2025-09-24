import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import env from 'dotenv';
import pg from 'pg';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy } from "passport-local";
import session from 'express-session';

env.config();
const app = express();
const serverPort = parseInt(process.env.APP_PORT);
const saltRounds = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "..", "client", "dist")

import userRouter from "./routes/users.js";
import vesselRouter from "./routes/vessels.js"
app.use("/api/users", userRouter);
app.use("/api/vessels", vesselRouter);

app.use(express.static(distPath));

app.all("/{*any}", (req, res) => {
    console.log(distPath, "index.html");
    res.sendFile(path.join(distPath, "index.html"));
});

app.listen(serverPort, () => {
    console.log(`Server running on port: ${serverPort}`);
});