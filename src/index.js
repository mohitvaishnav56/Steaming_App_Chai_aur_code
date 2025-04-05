import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app } from './app.js';



import connectDb from "./db/db.js";

connectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is running...");
        });
    })
    .catch((err) => {
        console.log("Connection failed: ", err);
    });
