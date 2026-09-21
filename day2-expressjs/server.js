





// let http  = require("http")
// console.log (http)


// let server = http.createServer((req,res)=>{
//     console.log("hey..")
//     res.end(" ok get it")
// })

// server.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })






const express = require("express")

const app = express()

//  middleware for accepting data from frontend
app.use( express.json()) 

app.get("/",(req,res)=>{
    res.send("ok gor ittttt ")
})


app.get("/product",(req,res)=>{
    res.send("devenrad")
})

app.post("/create",(req, res)=>{
    console.log(req.body)

    //create 


    res.send("ok post")
})

let port  = 3000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})