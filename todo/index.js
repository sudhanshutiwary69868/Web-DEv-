const express=require('express')
const path = require('path');
const app=express()
let todod=[{
  names:"sudhanshu",age:21
}];
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
  res.send({todod})
})
app.listen(3000,()=>{
  console.log('listening on port 3000')
})