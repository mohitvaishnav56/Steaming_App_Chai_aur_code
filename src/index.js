// require("dotenv").config({ path: "/.env" })

import dotenv from "dotenv";
dotenv.config({ path: "/.env" });

import connectDb from "./db/db.js"

/*
// approach first
import express from "express"
const app = express();
(async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("error: ", err);
            throw err
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log("server is up and running on", process.env.PORT || 8000);
        })

    } catch (err) {
        console.log("error: ", err);

    }
})()
*/

connectDb();