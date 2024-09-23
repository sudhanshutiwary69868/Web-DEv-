const express=require("express")


const app=express(); //holding express app instance
function sum(n){
  let ans=0
  for(let i=0;i<n;i++){
    ans+=i
  }
  return ans;
}
//app will be used to set up your application
app.get("/",function(req,res){
  const n=req.query.n;
  const ans=sum(n)
  res.send("hi there" + ans)
})
app.listen(3000);