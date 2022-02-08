import express from "express";
const Students=[
    {
        name:"rania",
        id:1
    },
    {
        name:"khawla",
        id:2
    },
    {
        name:"Amir",
        id:3
    }
]
const app=express()
app.use(express.json())
console.log(Students);
const port = 5000
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
// app.get("/students",(req,res)=>{
//     res.send(Students)
// })
// app.post("/add",(req,res)=>{
//     res.json(req.body)
    
// })


//  const mid = (req,res,next) => {
//   console.log("the middlw");
//   next()
// };
// app.get("/students/:id",mid,(req,res)=>{
//   console.log(Students.find((student)=>student.id == req.params.id));
//     res.json(Students.find((student)=>student.id == req.params.id))
// }
// )
app.put("/students/:id",(req,res)=>{
    res.json("updated");
    console.log("updated");
    
    

})
app.delete("/students/:id",(req,res)=>{
    res.json(Students.filter(students => students.id !== parseInt(req.params.id)));
    console.log(Students)

})

app.put("/update/:id",(req,res)=>{
    res.json(Students.map(students => students.id === parseInt(req.params.id)?
    {...students,...req.body}:students));
})

app.listen(port,()=>{console.log("listening on port"+port);})