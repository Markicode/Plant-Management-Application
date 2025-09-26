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
import cors from "cors";

env.config();
const app = express();
const serverPort = parseInt(process.env.APP_PORT);
const saltRounds = 10;

const db = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "..", "client", "dist")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,       // HTTP dev
      httpOnly: true,      // voorkomt JS toegang
      sameSite: "lax",     // of "none" + secure:true in prod
      maxAge: 1000 * 60 * 60 * 24 // 1 dag
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());


//app.use(cors());

import userRouter from "./routes/users.js";
import vesselRouter from "./routes/vessels.js"
app.use("/api/users", userRouter);
app.use("/api/vessels", vesselRouter);



app.use(express.static(distPath));

app.all("/{*any}", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
        console.log("trying to find user");
      const result = await db.query("SELECT * FROM users WHERE username = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        console.log(user);
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //Error with password check
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              //Passed password check
              console.log("password oke");
              return cb(null, user);
            } else {
              //Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, done) => {
    console.log("serializeUser storing id:", user.id);
  done(null, user.id);
});
/*passport.deserializeUser(async (id, done) => {
    let user = null;
    try{
    const result = await db.query("SELECT * FROM users WHERE id = $1 ", [
        id,
      ]);
      user = result.rows[0];
      console.log("deserialize", user);
    }
    catch(err) {
        console.log(err)
    }
    done(null, user);
});*/
passport.deserializeUser(async (id, done) => {
  console.log("deserializeUser looking up id:", id);
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = result.rows[0];
    console.log("Found user in DB:", user);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.listen(serverPort, () => {
    console.log(`Server running on port: ${serverPort}`);
});