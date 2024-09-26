const express=require('express')
const app=express()
app.use(express.json());
let kidneys=[{
  names:"sudhanshu",age:21,
  kidneys:"unhealthy"
},{names:"arun",age:20,kidneys:"healthy"}]

app.get("/",function(req,res){
  let n=parseInt(req.query.n)
  //Yes, exactly! In Express (and most web frameworks), query parameters (req.query) are always received as strings by default, even if they represent numbers.
  if (n >= 0 && n < kidneys.length) {
    res.send(kidneys[n]); 
  } else{
    res.status(404).send("Invalid Index");
  }

})
app.post("/",function(req,rs){
  const newElemnt=req.body
  kidneys.push(newElemnt)
  rs.json(newElemnt)
})
app.put("/",function(req,res){
  let updated=false;
  for(let i=0;i<kidneys.length;i++){
    if(kidneys[i].kidneys==="unhealthy"){
      kidneys[i].kidneys="healthy"
      updated=true;
      break
    }
  }
    if(updated){res.json(`unhealthy were updated ${kidneys}`)}
    else{
      res.json({ message: "No unhealthy kidneys found",kidneys})
    }

  
})
app.delete('/',function(req,res){
  for(let i=0;i<kidneys.length;i++){
    if(kidneys[i].kidneys==="unhealthy"){
      kidneys.splice(i,1)
}
else if(!kidneys[i].kidneys){
  kidneys.splice(i,1)

}
  }
res.json(kidneys)

}
)
app.listen(3000,function(){
  console.log("listening on port 3000")
})