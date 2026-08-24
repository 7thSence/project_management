import express from "express"
import cors from "cors"


const app = express()

// basic configurations

app.use(express.json({limit :"16kb"}));
app.use(express.urlencoded({extended: true, limit : "16kb"}))
app.use (express.static("public"));

// cors configurations

app.use(cors({
    origin : process.env.CORES_ORIGIN?.split(",") || "http://localhost:5173",
    credentials : true,
    methods :["GET" , "POST", "PUT", "PATCH", "PATCH" , "DELETE", "OPTIONS"],
    allowedHeaders : ["Content-Type", "Authorization"],


          }),)



// import routes

import healthCheckRouter from "./routes/healthcheck.routes.js"

app.use("/api/v1/healthcheck" , healthCheckRouter)
app.use("/instagram" , healthCheckRouter)


app.get("/" , (req, res)  => {

    res.send("hi there, coming to dominate")

});

app.get("/substack" , (req,res) => {
    res.send ("Welcome to SubStack !!")
})

export default app;