const express=require('express');
const app=express();
const { createTodo,updateTodo }=require("./types");
const { tasks } = require("./DB/index");


app.use(express.json());
app.post("/todo",async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong input"
        })
        return ;
    }
    await tasks.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false
    })
    res.json({
        msg: "created Todo"
    })
    

})
app.get("/todo",async (req,res)=>{
    const todos=await tasks.find({});
    res.json({
        todos
    })    

})
app.put("/completed",async (req,res)=>{
    const idPayLoad=req.body;
    const parsedidPayLoad=updateTodo.safeParse(idPayLoad);
    if(!parsedidPayLoad.success){
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return ;
    }
    await tasks.update({
        _id:idPayLoad.id
    },{
        completed:true
    })
    res.json({
        msg : "Task is done"
    })
    

})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})