


let http  = require("http")
console.log (http)


let server = http.createServer((req,res)=>{
    console.log("hello i m server")
    res.end(" oj mene tumere baat sun le")
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})