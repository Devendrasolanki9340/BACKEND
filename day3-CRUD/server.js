

const express = require("express")

const app = express()

//  meiddleware for accepting  jsonvdata
app.use(express.json())

let port  = 3000

let users =[]

// create

app.post("/create",(req,res)=>{
    let body = req.body

    users.push(body)

    res.send("users is added successfully")
})

// get-read
app.get("/",(req ,res)=>{
    res.send(users)
})

// Update
app.put("/update/:id",(req,res)=>{
    let {id} =  req.params
    let {name} = req.body

    let updateUser = users.map((val)=>
        String(val.id) === id ? { ...val, name } : val
    )
    res.send(updateUser)
})


// delete 
app.delete("/delete/:id",(req,res)=>{
    let {id} = req.params

    let userData =users.filter((val)=> val.id !==id)
    users  = userData
    res.send(users)
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})












// devendrasolanki9340438561561_db_user

// hIPOwB2RFaACUZKH  