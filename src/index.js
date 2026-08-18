import dotenv from "dotenv" 

import app from "./app.js"
import mongoose from "mongoose"

import connectDB from "./db/index.js"

dotenv.config({
    path : "./.env"
})

const port = process.env.PORT || 3000

connectDB().then(() => app.listen (port , () => {
  console.log(`server started listening on port ${port}`)
}))
.catch((err) => {
  console.error("mongo db error" , err)
  process.exit(1);
})