const express = require('express')
const app = express()
app.use(express.json());
//router

const routeUser =require("./routes/UserRoute")

require("dotenv").config()
const port = process.env.PORT

const connectDB = require("./config/connectDB")
connectDB()

//utiliser les routes
app.use("/api/user", routeUser);

app.listen(port, (err)=>{
    err 
       ? console.log(err)
       :console.log('the server is running on port : '+ port)
})